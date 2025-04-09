var Request = require("request-promise");
const ticket = require('../models/ticket')

function idGenerator(type) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 14; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result = type+result;
    return result;
}

exports.paymentFetch = async (req, res) => {
    // var options = {
    //     uri: "https://api.razorpay.com/v1/payments/" + req.params.id,
    //     headers: {
    //         authorization:
    //             "Basic cnpwX3Rlc3Rfa0hiVWVmN1diTVJJQ3M6dUF1UHRRRExBbXN3aEZHb0NDYklCdWZz",
    //     },
    //     json: true,
    // };
    // Request(options).then((data) => res.json({ ...data }));
    console.log(req.params.id)
    await ticket.findOne({ "paymentId": req.params.id })
        .then(data => {
            console.log(Number(data.cost))
            const amt = Number(data.cost) * 100;
            payment = {
                "id": req.params.id,
                "entity": "payment",
                "amount": amt,
                "currency": "INR",
                "status": "captured",
                "order_id": "order_L0nS83FfCHaWqV",
                "invoice_id": "inv_L0nS7JIyuX6Lyb",
                "international": false,
                "method": "card",
                "amount_refunded": 0,
                "refund_status": null,
                "captured": true,
                "description": "#L0nS7JIyuX6Lyb",
                "card_id": "card_L0nSsfPv1LjA20",
                "card": {
                    "id": "card_L0nSsfPv1LjA20",
                    "entity": "card",
                    "name": "",
                    "last4": "1111",
                    "network": "Visa",
                    "type": "debit",
                    "issuer": null,
                    "international": false,
                    "emi": false,
                    "sub_type": "consumer",
                    "token_iin": null
                },
                "bank": null,
                "wallet": null,
                "vpa": null,
                "email": "gaurav.kumar@example.com",
                "contact": "+9000090000",
                "error_code": null,
                "error_description": null,
                "error_source": null,
                "error_step": null,
                "error_reason": null,
                "acquirer_data": {
                    "auth_code": "299196"
                },
                "created_at": Date.parse(data.bookedOn) / 1000
            }
            res.json(payment)
        })
        .catch(err => {
            res.json({ error: err })
        })
};

exports.paymentRefund = async (req, res) => {
    // var options = {
    //     method: "POST",
    //     uri: "https://api.razorpay.com/v1/payments/" + req.params.id + "/refund",
    //     headers: {
    //         authorization:
    //             "Basic cnpwX3Rlc3Rfa0hiVWVmN1diTVJJQ3M6dUF1UHRRRExBbXN3aEZHb0NDYklCdWZz",
    //     },
    //     json: true,
    // };
    // Request(options).then((data) => res.json({ ...data }));
    await ticket.findOne({ "paymentId": req.params.id })
        .then(data => {
            const refund_id = idGenerator('rfnd_');
            console.log(Number(data.cost))
            const amt = Number(data.cost) * 100;
            refund = {
                "id": refund_id,
                "entity": "refund",
                "amount": amt,
                "receipt": "",
                "currency": "INR",
                "payment_id": data.paymentId,
                "notes": [],
                "receipt": null,
                "acquirer_data": {
                    "arn": null
                },
                "created_at": Math.floor(Date.now() / 1000),
                "batch_id": null,
                "status": "processed",
                "speed_processed": "normal",
                "speed_requested": "normal"
            }
            res.json(refund);
        })
        .catch(err => {
            const error = {
                "error": {
                    "code": "BAD_REQUEST_ERROR",
                    "description": err,
                    "source": "business",
                    "step": "payment_initiation",
                    "reason": "input_validation_failed",
                    "metadata": {},
                    "field": "amount"
                }
            }
            res.json(error)
        })
}

exports.refundFetch = (req, res) => {
    var options = {
        uri: "https://api.razorpay.com/v1/payments/" + req.params.id + "/refunds",
        headers: {
            authorization:
                "Basic cnpwX3Rlc3Rfa0hiVWVmN1diTVJJQ3M6dUF1UHRRRExBbXN3aEZHb0NDYklCdWZz",
        },
        json: true,
    };
    Request(options).then((data) => res.json({ ...data }));
};

exports.ticketStatus = (req, res) => {
    // var options = {
    //     uri:
    //         "https://api.razorpay.com/v1/invoices?type=link&payment_id=" +
    //         req.query.payment_id,
    //     headers: {
    //         authorization:
    //             "Basic cnpwX3Rlc3Rfa0hiVWVmN1diTVJJQ3M6dUF1UHRRRExBbXN3aEZHb0NDYklCdWZz",
    //     },
    //     json: true,
    // };
    // Request(options)
    //     .then((data) => res.json({ ...data }))
    //     .catch((data) => res.json({ ...data }));
    // console.log(req.body)
    // res.json({ msg: 'hello!' })
};

exports.ticket_book_get = (req, res) => {
    // console.log(req.body)
    let payment_id = idGenerator('pay_')
    // var options = {
    //     uri: "https://api.razorpay.com/v1/invoices/" + req.params.id,
    //     headers: {
    //         authorization:
    //             "Basic cnpwX3Rlc3Rfa0hiVWVmN1diTVJJQ3M6dUF1UHRRRExBbXN3aEZHb0NDYklCdWZz",
    //     },
    //     json: true,
    // };
    // Request(options).then((data) => res.json({ ...data }));
    res.json({
        msg: 'success',
        payment_id: payment_id,
        invoice_id: req.params.id
    })
};
exports.ticket_book_post = (req, res) => {
    let invoice_id = idGenerator('inv_')
    res.json({
        msg: 'success',
        id: invoice_id
    })
} 
