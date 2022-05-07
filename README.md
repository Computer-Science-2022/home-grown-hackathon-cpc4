# The Great Lake Seraphim project

# About
This is a website project with an Animal tracker that moniters animal movement across Africa escpecially the great Lakes along the Rift Valley .
The project focus on two grand challenges , climate change and Wildlife conservation. The tracker will be resourcefully in collecting data over period of time which can be analyzied to give climate patterns and trends in the wildlife ecosystem . In wildlife conservation , the tracker will be resourcefully in protecting the wildlife by tracking the number of animals and preventing poaching.  The website shows a live map of wildlife across different regions and it can also be used to promote tourism by  predicting  where the animals will be .

# Quick start 
We used Nodejs , MongoDB ,Express for ApI 
This in the tracker code where and Admin can add the animal to track , and the data of the location trends aare saved in the database MongoDB
For the from end we used , basic HTML/CSS and JS
# Install dependencies
npm install

# Serve on localhost:3000
npm run dev (nodemon)
or
npm start

# Routes
GET    /api/v1/animals # Get animals being tracked on the map

POST   /api/v1/animals # Add animal to be tracked 
body { animalId: "0001", currentLocation: "Lake Victoria" }


# Links 


Slides Presentation:  https://www.canva.com/design/DAE_8IdsS38/yP9hNtdmsN0CDcbueSGmSw/view?utm_content=DAE_8IdsS38&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink   

Video Presentation:






