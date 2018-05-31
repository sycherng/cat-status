# Cat-status API
## What
A REST API that provides information about virtual cats.

## Endpoints
`/bio` - lists biographical information for all cats in the database.
`/bio/<catname>` - lists biographical information about the specified cat.
`/status` - prompts to specify a cat
`/status/<catname>` - informs the user of what the specified cat is currently doing.

## Logic
- Activities last for plausible durations (not exposed to user). This means spamming the same request will not yield different results each time (because real cats cannot teleport from place-to-place every second). It also means that activities such as using the litterbox will last shorter than say, soliciting pats and food from neighbours.
- Each cat will not engage in the same activity back-to-back.

## Realistic use-case
This API currently supplies information about virtual, nonexistent cats. However it can easily be modified to return information about real adoptable pets from local shelters such as name, age, appearance, backstory, immunization and house-training status, siblings also looking to be adopted, etc. This would allow developers to build applications that provide useful data about the pets to potential adopters.

## Server setup
If you would like to host this API on your local server for learning purposes:

  1. Install Node, NPM, and MongoDB
    
  2. Fork this repository to your personal Github account
    
  3. In the terminal, `git clone https://github.com/<your-github-username>/cat-status.git && cd cat-status/ && npm i`
    
  4. Add the example data to your MongoDB instance, or supply your own.
    
  5. Edit `app.js` and adjust the MongoDB connection information for your instance.
    
  6. Run the server with `npm start`.
    
  7. In a separate terminal screen, use `curl -X GET http://localhost:3000/<endpoint>` to send requests.

## Example data setup
  Connect to MongoDB and run:
    
  ```
  use('cat-status')
  db.createCollection('bios')
  db.createCollection('status')
  db.bios.insert([{"_id":"5b0f0dda8b49f7e03651c1d1","name":"Cheesecake","breed":"British Shorthair","color":"cream, white","life_stage":"adult","sex":"male","size":"large","personality":"calm, quiet, friendly, suave"},{"_id":"5b0f0dda8b49f7e03651c1d2","name":"Mimiko","breed":"Japanese Bobtail","color":"mi-ke (black, red, white)","life_stage":"kitten","sex":"female","size":"large","personality":"smart, talkative, friendly"},{"_id":"5b0f0dda8b49f7e03651c1d3","name":"Ms-Demeanor","breed":"Ocicat","color":"cinnamon silver","life_stage":"prime","sex":"female","size":"large","personality":"affectionate, demanding, active"},{"_id":"5b0f0dda8b49f7e03651c1d4","name":"Sylvester","breed":"Munchkin","color":"grey, white","life_stage":"senior","sex":"male","size":"small","personality":"sociable,  caring, forgetful"}])
  db.status.insert([{"_id":"5b0f0dda8b49f7e03651c1d1","activity":"sleeping","expiry":Date.now()}, {"_id":"5b0f0dda8b49f7e03651c1d2","activity":"sleeping","expiry":Date.now()}, {"_id":"5b0f0dda8b49f7e03651c1d3","activity":"sleeping","expiry":Date.now()}, {"_id":"5b0f0dda8b49f7e03651c1d4","activity":"sleeping","expiry":Date.now()}])
  ```

## License
ISC.
