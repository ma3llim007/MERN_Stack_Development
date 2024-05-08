const typingText = document.querySelector(".typing-text p");
const timeElement = document.querySelector(".time span");
const inputField = document.querySelector(".input-field");
const mistakeElement = document.querySelector(".mistake span");
const wpmElement = document.querySelector(".wpm span");
const cpmElement = document.querySelector(".cpm span");
const tryAgain = document.querySelector("#try-again");
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

// Paragraph List
let paragraphArray = [
    "The wind whispered through the trees as the sun dipped below the horizon, casting long shadows across the meadow. In the heart of the city, skyscrapers reached towards the sky, their mirrored surfaces reflecting the bustling streets below.",
    "With each step, the hiker felt the weight of their backpack pressing against their shoulders, but the beauty of the mountain vista ahead kept them moving forward. The sound of laughter filled the room as friends gathered around the table, sharing stories and making memories.",
    "As the rain fell gently outside, the old man sat by the window, lost in thought as memories of years gone by washed over him. In the quiet of the night, the stars twinkled overhead, providing a comforting blanket of light in the darkness.",
    "With a flick of his wrist, the magician pulled a rabbit out of his hat, eliciting gasps of amazement from the audience. As the waves crashed against the shore, the children laughed and played in the surf, their joy infectious to all who watched.",
    "The smell of freshly baked bread filled the air, drawing people into the quaint little bakery on the corner. In the distance, thunder rumbled ominously, warning of an approaching storm.",
    "The painter carefully dipped his brush into the palette, mixing colors until he found just the right shade to capture the beauty of the sunset. With a sigh of relief, the traveler finally reached the summit, taking in the breathtaking view spread out before them.",
    "As the music swelled, the dancers moved in perfect harmony, their movements fluid and graceful. In the stillness of the forest, a deer cautiously emerged from the underbrush, its ears twitching at the slightest sound.",
    "With a roar of engines, the race cars sped around the track, leaving a trail of dust and excitement in their wake. The scent of pine filled the air as the camper roasted marshmallows over the crackling fire.",
    "In the warmth of the sun, flowers bloomed and birds sang, signaling the arrival of spring. With a gentle nudge, the mother pushed her baby in the swing, smiling as she watched the sheer delight on their face.",
    "As the clock struck midnight, fireworks lit up the sky, painting it with bursts of color and light. In the darkness of the cave, the explorer's flashlight cast eerie shadows on the walls as they ventured deeper into the unknown.",
    "The aroma of coffee wafted through the air, drawing people into the cozy cafe on the corner. With a soft purr, the cat rubbed against its owner's leg, seeking affection.",
    "As the snow began to fall, children rushed outside to build snowmen and engage in epic snowball fights. In the heat of the desert, mirages danced on the horizon, teasing travelers with the promise of water and shade.",
    "With a flick of his wand, the wizard conjured a shower of sparks, delighting the children gathered around him. The aroma of sizzling bacon filled the kitchen, making everyone's mouth water in anticipation of breakfast.",
    "In the depths of the ocean, strange and wondrous creatures lurked, their bioluminescent forms lighting up the darkness. With a gentle breeze, cherry blossoms fluttered to the ground, creating a carpet of pink and white petals.",
    "As the leaves rustled overhead, a sense of peace settled over the forest, broken only by the occasional chirp of a bird. With a burst of energy, the runner sprinted towards the finish line, their heart pounding with adrenaline.",
    "In the quiet of the library, the only sound was the soft rustle of pages as readers lost themselves in their books. With a twirl of her skirt, the dancer leaped gracefully into the air, defying gravity for a brief moment.",
    "As the sun dipped below the horizon, the sky exploded in a riot of colors, casting a warm glow over the landscape. With a flick of his tail, the cat pounced on the toy mouse, batting it around with gleeful abandon.",
    "In the cool of the evening, friends gathered around the campfire, sharing stories and roasting marshmallows. With a burst of laughter, the children chased each other through the sprinklers, their joy infectious to all who watched.",
    "The scent of fresh flowers filled the air, mingling with the sound of bees buzzing lazily among the blooms. With a gentle hum, the drone soared through the sky, capturing breathtaking aerial footage of the landscape below.",
    "As the sun set, casting long shadows across the sand dunes, the desert came alive with the sound of nocturnal creatures stirring. With a gentle tap, the conductor signaled the start of the symphony, drawing the audience into the world of music.",
    "In the warmth of the kitchen, the chef worked tirelessly to create culinary masterpieces that would delight the senses. With a flick of her wand, the fairy sprinkled fairy dust over the garden, causing flowers to bloom and vines to grow.",
    "As the waves crashed against the cliffs, the seagulls soared overhead, their cries echoing across the water. With a gentle push, the mother pushed her child on the swing, laughing as they squealed with delight.",
    "In the glow of the streetlights, couples strolled hand in hand, enjoying the peace and quiet of the evening. With a gentle rustle, the leaves danced in the breeze, creating a soothing melody that filled the forest.",
    "As the sun rose, painting the sky with streaks of pink and orange, the world woke up to a new day full of possibilities. With a flick of his tail, the cat stretched lazily in the sun, enjoying the warmth on his fur.",
    "In the hush of the evening, the only sound was the crackling of the fire as the family sat together, enjoying each other's company. With a flutter of wings, the butterfly took flight, its colorful wings shimmering in the sunlight.",
    "As the rain fell outside, the children huddled together under the blankets, listening to the soothing sound of the drops against the window. With a gentle nudge, the dog nudged its owner's hand, eager for attention.",
    "In the heart of the city, the streets were alive with the hustle and bustle of people going about their day. With a flick of her wand, the witch brewed a potion that bubbled and steamed, filling the air with a pungent aroma.",
    "As the moon rose, casting its silvery light over the landscape, the creatures of the night emerged from their hiding places. With a soft sigh, the baby drifted off to sleep, her tiny chest rising and falling in a rhythm all her own.",
    "In the warmth of the sun, the flowers bloomed and the bees buzzed lazily among the blooms. With a flick of his wrist, the chef tossed the vegetables in the air, expertly catching them in the pan.",
    "As the stars twinkled overhead, the lovers lay on the grass, lost in each other's arms. With a gentle tap, the dancer leaped across the stage, their movements fluid and graceful.",
    "In the silence of the night, the only sound was the gentle rustle of leaves in the breeze. With a burst of laughter, the children ran through the sprinklers, their shrieks of delight echoing through the neighborhood.",
    "As the sun set, painting the sky with streaks of pink and gold, the world seemed to hold its breath in anticipation of the night to come. With a flick of his tail, the cat batted at the toy mouse, his eyes gleaming with mischief.",
    "In the warmth of the kitchen, the chef worked tirelessly to create dishes that would delight the senses. With a gentle hum, the drone soared through the air, capturing stunning aerial footage of the landscape below.",
    "As the waves crashed against the shore, the seagulls cried out overhead, their calls echoing across the water. With a gentle push, the mother pushed her child on the swing, smiling as they laughed with delight.",
    "In the glow of the streetlights, couples walked hand in hand, enjoying the peace and quiet of the evening. With a flick of his tail, the cat stretched out in the sun, enjoying the warmth on his fur.",
    "As the rain fell outside, the children gathered around the window, watching the drops race down the glass. With a gentle nudge, the dog nudged its owner's hand, seeking attention.",
    "In the heart of the city, the streets were alive with the sounds of people going about their day. With a flick of her wand, the witch brewed a potion that bubbled and steamed, filling the room with a pungent aroma.",
    "As the moon rose, casting its silvery light over the landscape, the creatures of the night emerged from their hiding places. With a soft sigh, the baby drifted off to sleep, her tiny chest rising and falling in a steady rhythm.",
    "In the warmth of the sun, the flowers bloomed and the bees buzzed lazily among the blooms. With a flick of his wrist, the chef tossed the vegetables in the air, expertly catching them in the pan.",
    "As the stars twinkled overhead, the lovers lay on the grass, lost in each other's arms. With a gentle tap, the dancer leaped across the stage, their movements fluid and graceful.",
    "In the silence of the night, the only sound was the gentle rustle of leaves in the breeze. With a burst of laughter, the children ran through the sprinklers, their shrieks of delight filling the air.",
    "As the sun set, painting the sky with streaks of pink and gold, the world seemed to hold its breath in anticipation of the night to come. With a flick of his tail, the cat batted at the toy mouse, his eyes gleaming with mischief.",
    "In the warmth of the kitchen, the chef worked tirelessly to create dishes that would delight the senses. With a gentle hum, the drone soared through the air, capturing stunning aerial footage of the landscape below.",
    "As the waves crashed against the shore, the seagulls cried out overhead, their calls echoing across the water. With a gentle push, the mother pushed her child on the swing, smiling as they laughed with delight.",
    "In the glow of the streetlights, couples walked hand in hand, enjoying the peace and quiet of the evening. With a flick of his tail, the cat stretched out in the sun, enjoying the warmth on his fur.",
    "As the rain fell outside, the children gathered around the window, watching the drops race down the glass. With a gentle nudge, the dog nudged its owner's hand, seeking attention.",
    "In the heart of the city, the streets were alive with the sounds of people going about their day. With a flick of her wand, the witch brewed a potion that bubbled and steamed, filling the room with a pungent aroma.",
    "As the moon rose, casting its silvery light over the landscape, the creatures of the night emerged from their hiding places. With a soft sigh, the baby drifted off to sleep, her tiny chest rising and falling in a steady rhythm.",
    "In the warmth of the sun, the flowers bloomed and the bees buzzed lazily among the blooms. With a flick of his wrist, the chef tossed the vegetables in the air, expertly catching them in the pan.",
    "As the stars twinkled overhead, the lovers lay on the grass, lost in each other's arms. With a gentle tap, the dancer leaped across the stage, their movements fluid and graceful."
];

// Function For Counting Timer
const countTime = () => {
    if (timeLeft > 0) {
        timeLeft--;
        timeElement.innerText = timeLeft + "s";
        let WPMCalAmount = Math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
        wpmElement.innerText = WPMCalAmount;
    }
    else {
        clearInterval(timer);
        inputField.value = " ";
        let AllSpan = typingText.querySelectorAll("span");
        AllSpan.forEach((span) => {
            span.classList.remove("active", "error", "success");
        });
        AllSpan[0].classList.add("active");
    }
}

// Handle User Input in Paragraph
const initTyping = () => {
    const paragraphChar = typingText.querySelectorAll("span");
    const userTypeInputChar = inputField.value.charAt(charIndex);
    if (charIndex < paragraphChar.length && timeLeft > 0) {
        // Counting Timer For typing
        if (!isTyping) {
            timer = setInterval(countTime, 1000);
            isTyping = true;
        }
        if (paragraphChar[charIndex].innerText === userTypeInputChar) {
            paragraphChar[charIndex].classList.remove("active");
            paragraphChar[charIndex].classList.add("correct");
        } else {
            mistake++;
            paragraphChar[charIndex].classList.add("error");
        }
        charIndex++;
        paragraphChar[charIndex].classList.add("active");
        mistakeElement.innerText = mistake;
        cpmElement.innerText = charIndex - mistake;
    }
    else {
        // clearInterval(timer);
    }
};

inputField.addEventListener("input", initTyping);




// Function For Loading The Paragraph
const loadedPara = () => {
    const RandomIndex = Math.floor(Math.random() * paragraphArray.length);
    typingText.innerHTML = ``;
    for (let Para of paragraphArray[RandomIndex]) {
        typingText.innerHTML += `<span>${Para}</span>`;
    }
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());
};
loadedPara()


// Function For Reset Game
tryAgain.addEventListener("click", () => {
    timeLeft = maxTime;
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    timeElement.innerText = 0;
    mistakeElement.innerText = 0;
    wpmElement.innerText = 0;
    cpmElement.innerText = 0;
    clearInterval(timer);
    loadedPara();
});