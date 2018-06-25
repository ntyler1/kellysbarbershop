## Project Description

An interactive dynamic web page for a small barbershop located in NY. The barbershop does not have its own website therefore I started this project as a gift to them. The project is a work in progress and I work on it whenever I have free time.

## Project Features (green = completed, red = working on)

  ```diff
    
  Fixed header and footer
  + Quote carousel that fades out and fades in
  + Footer contains basic copyright and creator (me) info and report bugs button
  + report bugs opens modal form
  - actual bug information being sent to email
  - vary basic header text and images, planning on getting a buddy to create a logo
    
  Static navbar that hugs top of the page
  + Features home, prices, hours navigation buttons along with a book appointment button
  + navigation buttons cause a fade out of current page and a fade in of new page
    
  Book Appointment Button
  + opens a modular form
  + text fields for name, email, phone with regex validation - required
  + date input for appointment date, no date before current date is allowed - required
  + time input for appointment time, 15 minute interval restriciton - required
  + Feedback on submit consists of red (error) or green(ok) border around fields with matching text
  + success alert on a successful submit
  - Actual booking features
  - plans: send a text to barber with appointment info, barber can either accept or decline via text which is relyed back to customer
  
  Home Content
  + features a fade in, fade out quote carousel
  + About the barber section - consisting of photo of barber and basic information
  + Social Media section - consisting of buttons that directs them to barber's social media account
  + Location section - connects and displays google maps api with bouncing marker on the shop's location, also features basic shop location info
  + Haircut Gallary section - consisting of a navigational haircut photo carousel
  
  Price Content 
  +Table consisting of types of services and their corresponding prices
  
  Hours Content
  +Table consisting of week days and their corresponding shop hours along accepting walk-ins/appointments info
