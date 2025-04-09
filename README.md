# Railway-Reservation

This is the topic for our third year Software Engineering Project. The function description for our project is as follows:
<ol>
<li><h3>Log in Function:</h3> This function ensures that only authorized users gain access to the Reservation databases. An
authorized user is a user who has an account on the system. Users include passengers, train officials, and CRM
ministry officials. The uer must type a valid username and password to gain access.</li>
<li><h3>Make Reservation Function:</h3> This function allows the user to make a reservation for a particular train on a
particular date for a certain number of tickets. If the user does not already have a reservation, then a new
reservation is created. If the user already has a previous reservation, a new reservation is added to the list of current
reservations, and the passenger account balance gets updated.</li>
<li><h3>Drop a Reservation Function:</h3> This function allows the user to drop a reservation for a particular train on a
particular date for a certain number of tickets. If the user does not already have a reservation, then all reservations
are dropped. If the user already has a previous reservation, a chosen reservation is dropped from the list of current
reservations, and the passenger account balance gets updated.</li>
<li><h3>Display Current Reservation Function:</h3> This function allows the user to see a list of all his/her current reservations.
If the user does not have any reservations at the time (assuming that the user has a valid account on the Reservation
system), and empty list with a message “No Reservations Have Been Made” is displayed. The System should have
provision to display the wait listed candidates.</li>
<li><h3>Display Train Schedule Information Function:</h3> This function allows the user to see a list of all scheduled train
departures including train name, city from and to which the train is going, the number of seats available, and the
prices for different ticket types.</li>
<li><h3>Display Balance Function:</h3> This function provides a listing of the current balance due and payments received in the
past. This information is presented in an easy to follow format and separately displays each reservation.</li>
<li><h3>Pay Reservation Function:</h3> This function allows the user to pay his/her current reservation cost. The user may
either pay entire balance due or select to pay in person within 48 hours. The user must also input a valid credit card
number or CRM Credit account number.</li>
<li><h3>Add a Train Function:</h3> This function allows the user to add a train with a particular seat type on a particular date
and time to travel between the cities specified. If the train does not already exist in the train schedule, then a new
train route is created and the ticket availability for that route is updated. If the train already exists in the train
schedule, the train schedule information is updated.</li>
<li><h3>Drop a Train Function:</h3> This function allows the user to drop a train of a particular seat type on a particular date
and time that was traveling between the cities specified. If the train does not exist in the current train schedule, the
request is ignored. If the train exists in the reservation database, the chosen train is dropped from the list of current
train schedules, and the train schedule gets updated.</li>
<li><h3>Display Report Function:</h3> This function allows the user to display the following reports:Number of Reservations
for Each Departure Date/Train</li>
</ol>

## Technologies Used:
<ul>
<li><h3>Frontend:</h3> HTML, CSS, JS</li>
<li><h3>Frameworks:</h3> React.js, Node.js</li>
<li><h3>Database:</h3> MongoDB</li>
<ul>

