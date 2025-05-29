# wh40k-roll-simulator

I'm thinking that I'll use this project to just play around with warming up again in html, css, js. The plan will be to develop code that actually simulates dice rolls of a 40k unit attacking another 40k unit. The goal is to be able to specify the details of attacker and defender, specify the number of simulations to run, then to receive a readout detailing the specifics of the attacks, such as how many dice failed/passed at each step, how much a given modifier affected things, etc.


Battle Simulation Strategy

How should things be structured?
  - Everything is based around models and weapons
  - A model has:
    - Toughness
    - Wounds
    - Save
    - Special Rules
    - Weapons
    - Wounds taken
    - Models Lost


-- weapon attack function
a single weapon makes an attack against a single model

  Determines the average damage (in wounds) of a single attack
  + weapon needs 
    - Ballistic Skill
    - Strength
    - AP
    - Damage
    - Special Rules (twin-linked, heavy, etc)
  + model needs
    - Toughness
    - Wounds
    - Save
    - Special Rules (-1 damage etc)
    - Maybe leader rules but thats minor

-- attack results function
after receiving the results of a weapon attack, determine damage
to the model (destroying a model and incrementing the models destroyed
while resetting wounds taken to zero if needed)

  + model needs
   - wounds
   - wounds taken so far
   - models destroyed so far



   