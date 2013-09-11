$(function(){
    var container = $("#the-texts"),
        _sentenceEndExp = /(\.|\?|!)$/g, //regular expression to sense punctuation that indicates the end of a sentence so that we can adjust timing accordingly
        startBtn = $("#start-anim"),
        spinMarker = $("#spin-marker"),
        ghostImages = $("#ghost-images"),
        winImages = $("#win-images"),
        winHeader = $("#win-header"),
        // REVOLUTION TEXTS
        theTexts = {
        freedom: [
            "Six-hundred thousand Africans were enslaved within the boundaries of the continent, by other Africans, each year during the 19th century - about 10 times the number of slaves transported across the Atlantic.",
            "\"War is Peace, Freedom is Slavery, Ignorance is Strength.\" George Orwell",
            "We will fight to protect your freedom to die for causes we decide you are free to fight and die for.",
            "We will promote your freedom to consume, even the things that will consume you. Have no fear. We will bathe you in an endless stream of messages that speak to your subconscious and liberate your desire to consume more.",
            "The general population have had their liberties taken away from them, but they rather enjoy it. They are being distracted from revolution by \"propaganda disguised as entertainment.\" [#] Do you feel entertained? [Aldous Huxley]."
        ],
        order: [
            "Has your country been a subject or an object of history?",
            "There is silence on all the important matters, we move from crisis to crisis as if happiness is a vice.",
            "Opinion strikes like a gavel. That sound you hear is a hardwood mallet brought down in your brain to establish the next pronouncement. No discussion is necessary.",
            "Racism, xenophobia, and superiority syndromes are terrific tools to bring people on-side. Corruption and violence will keep them on-message. Well-placed rumours will pay dividends. Buy into the program, or chose to live a drab life of desperation."
        ],
        natural: [
            "We ignore the sheer, unharnessed energy of the oceans, while crawling about on the planet like ants carrying grains of sugar from a limited source.",
            "The pre-given world of natural things has lost its relevance in this modern age. Some critics now say all things are natural, but this only applies if you are able to drop your morality and wait for the logical end of natural things. You won't have long to wait.",
            "Natural Whole Foods Group Bulletin: It's only natural to pay a premium for Whole Foods because NWFG has created a lifestyle brand that delivers on its promise. Our product will monitor you constantly to ensure that you get the most benefit from an NWFG lifestyle."
        ],
        loyalty: [
            "He was loyal to the party and voted against his conscience, this was made possible by blind faith in the Leader.",
            "I have a loyalty that runs in my bloodstream, when I lock into someone or something, you can't get me away from it. I commit thoroughly. That's in policy, a deal, a commitment. Right or wrong.",
            "I'll take fifty percent efficiency to get one hundred percent loyalty. That's how you run a country.",
            "What history are you loyal to? Would you swear by a history? Does it include bones? Are you loyal to certain bones?",
            "Loyalty is an important technology. Our loyalty program operators are ready to get you up and running with our innovative Smart Button. Loyalty is a click away.",
            "One session with Dr Justin Love, our Loyalty Sessionist, and you will be rid of any instances of disloyalty, faithlessness, falseness, falsity, inconstancy, infidelity, perfidiousness, perfidy, treachery, or unfaithfulness. Certification guaranteed."
        ],
        justice: [
            "A rich man in Thailand harbored his murderous son in a garden of peacocks and palms.",
            "A system of justice can execute an innocent person. This makes of Justice a lottery system, not a system of justice."
        ],
        truth: [
            "What is Truth if not put to the test? Is Truth a comfortable chair and a fire in the stove? That is comfort. Truth is in the fire.",
            "It might be said that the meaning of one word is always another word. Apply this to Truth, or someone else will do it for you.",
            "There is a hard kernel of Truth at the core, under our Plasticine lives. We can re-model as we wish, as we age, during trauma or glee - but the only way to reach the core is by stripping away the clay.",
            "The Competition Bureau prohibits making any deceptive representations for the purpose of promoting a product or a business interest. The provision does not apply if the advertised representation was a mistake. We all make mistakes.",
            "\"You can be sure of this, fellow scribbler. You can trust the darkness when the light lies.\" Eugenio Montale",
            "He waved the truth around and said he had proof, but at the end of the day he could not provide the truth. There is no such thing as a half-truth - is there?",
            "\"Amongst the many bearded prophets wandering around someone might even have touched the truth but only with his finger which he then withdrew. The truth burns.\" Eugenio Montale",
            "\"The truth lies in the nibblings of moths and mice, in the powder that issues from moldy chests of drawers, n the crusts of seasoned Parmesan.\" Eugenio Montale"
        ],
        equality: [
            "We carry our differences to the grave.",
            "\"What travel discloses to us first of all is our garbage, flung in the face of humanity.\" Paul Bowles",
            "\"The revolution of the word is the revolution of the world, and that both cannot exist without the revolution of the body: life as art, a return to the mythic lost unity of thought and body, man and nature, I and the other.\" Octavio Paz"
        ],
        hope: [
            "The athlete jogs to the hangman.",
            "Hope Springs INC: for all your suspension needs. Suspend grief, suspend worry, suspend anger, suspend lies. Every tune-up includes a minimum 150 Hope Points. Bonus points if you upgrade to the Eternal Club: suspend yourself in hope.",
            "Peddling the semblance of hope, every lottery ticket bought inflates idle wishes, devaluing any firm grounds for optimism. This is a guarantee."
        ],
        security: [
            "The drone pilot shifted in his seat. There was a flash on the screen: the explosion. Parts of the building collapsed. The child disappeared. Paraphrased from Mattathias Schwartz, LRB.",
            "In a signature strike, a person is made a target not because of their identity but because of certain signatures - codified justifications for killings that have already taken place. Paraphrased from Mattathias Schwartz, LRB.",
            "In today's day and age, every computer should be protected. It is best to wear a tin-foil hat while browsing the web. Maybe also surround your computer with talismans."
        ],
        value: [
            "\"From the very beginning of the modern age the history, morality, and politics of the West have been grounded in an overvaluing of the future.\" Octavio Paz",
            "Language is the heaviest of burdens. Poor translation can be costly.",
            "This moment is worth all of your futures.",
            "Charity grows coldest \"in those which most doe manifest the fires and flames of zeale.\" Thomas Browne, 1605 - 1682",
            "Henry James warned the graduates about destroying the \"ancestral circle\" of language, and making it instead \"a mere helpless slobber of disconnected vowel noises.\"",
            "\"There are worlds composed of nonsensical trifles that have great meaning, and worlds composed of apparently serious matters that have no meaning at all.\" Vasily Grossman"
        ]
    },
        winWords = ["natural","order","freedom","value","security","hope","equality","truth","justice","loyalty"],
        winWordsTotal = winWords.length,
    // REVOL
        amount = 10,
        indRotation = (360 / amount),
        words = ["Freedom","Order","Natural","Loyalty","Justice","Truth","Equality","Hope","Security","Value"],
        ghosts = ["#ghost1","#ghost2"],
        winHeads = ["#natural","#order","#freedom","#value","#security","#hope","#equality","#truth","#justice","#loyalty"],
        spinPos = [1098,1134,1170,1206,1242,1278,1314,1350,1386,1422],
        element,
        elemContainer = $("div#elemContainer"),
        path = [{x:0,y:0},{x:220,y:-220},{x:440,y:0},{x:220,y:220},{x:0,y:0}],
        location = {x:path[0].x,y:path[0].y},
        placeTwn = TweenMax.to(location, amount, {bezier:{curviness:1.5, values:path}, ease:Linear.easeNone});

    // place REVOL words in a CIRCLE
    for(i = 0; i < amount; i++)
    {
        placeTwn.time(i);
        console.log(location.x + ' // ' + location.y);
        element = '<div class="element" id="element' + i + '">' + words[i] + '</div>';
        elemContainer.append(element);
        TweenMax.set($("div#element" + i), {x:location.x - 70, y:location.y + 210,rotation:((indRotation * i )- 90)});
    }

    // Initial state of UI
    TweenMax.set([spinMarker,".img", "#win-header h3"], {autoAlpha:0});
    TweenMax.set(".pic", {borderRadius: "50%", autoAlpha:0});
    //TweenMax.set(theTexts, {autoAlpha:0});

    startBtn.on("click", startRevolution);

    // REVOL ANIMATION
    function startRevolution(){
        var tl = new TimelineMax(),
            currentGhost,
            ranGhost = Math.floor(Math.random()*2),
            oldPic,
            ranSpin = Math.floor(Math.random()*10),
            // select random text from theTexts selected array
            ranWin = Math.floor(Math.random() * winWordsTotal),
            winWord = winWords[ranSpin],
            winHead = winHeads[ranSpin],
            ranText = Math.floor(Math.random() * theTexts[winWord].length);

                    console.log("winWord is " + winWord + " and winHead is " + winHead);
                    console.log("ranText # " + ranText + " & winWord array length is " + theTexts[winWord].length);

        // set up
        TweenLite.set(elemContainer, {rotation:0});
        TweenLite.set([startBtn, spinMarker], {autoAlpha:0});
        //fade out any pic that might be in the centre
        TweenMax.to(ghosts, 0.5, {autoAlpha:0});
        TweenMax.to(theTexts, 0.5, {autoAlpha:0});

        currentGhost = ghosts[ranGhost];

        // REVOL animation
        tl.to(elemContainer, 5, {rotation:spinPos[ranSpin], ease:Circ.easeOut})
            //show spinMarker
            .to(spinMarker, 2, {autoAlpha:1}, "-=2")
            //show pic
            .to(currentGhost, 2, {autoAlpha:0.15})
//            .to([theTexts, winHead], 1, {autoAlpha:1})
            .to(theTexts, 1, {autoAlpha:1}, "-=0.25")
            .to(elemContainer, 0.75, {autoAlpha:0}, "-=1")
            .to(winHead, 0.75, {autoAlpha:0.5, scale:1.05}, "-=1");
        tl.addCallback(animateCentreTexts, "-=1.5");

        console.log("ranGhost is " + ranGhost + " currentGhost is " + ghosts[ranGhost]);

        // ANIMATE & DELIVER TEXTS IN CENTRE - CENTRAL TEXTS DEFINING THE 'WIN' WORDS
        function animateCentreTexts () {
            //this function just takes a string of text and splits it into an array based on the maximum length that should be allowed to exist in each line, and when it encounters the end of a sentence (ending in ".", "?", or "!"), it will force a line break too.
            function buildChunks(text, maxLength) {
              if (maxLength === undefined) {
                return text.split(" ");
              }
              var words = text.split(" "),
                  wordCount = words.length,
                  chunk = [],
                  chunks = [], i;
              for (i = 0; i < wordCount; i++){
                chunk.push(words[i]);
                if (i === wordCount - 1 || chunk.join(" ").length + words[i+1].length > maxLength) {
                  chunks.push(chunk.join(" "));
                  chunk = [];
                }
                // if (_sentenceEndExp.test(words[i]) || i === wordCount - 1 || chunk.join(" ").length + words[i+1].length > maxLength) {
                //   chunks.push(chunk.join(" "));
                //   chunk = [];
                // }
              }
              return chunks;
            }

            function deliverText(chunks, maxLength) {
              //in case "chunks" isn't an array, we'll build chunks automatically
              if (!(chunks instanceof Array)) {
                chunks = buildChunks(chunks, maxLength);
              }

              var tl = new TimelineMax({onComplete:reset}),
                  time = 0,
                  chunk, element, duration, isSentenceEnd, i;

              for (i = 0; i < chunks.length; i++) {
                chunk = chunks[i];
                isSentenceEnd = (i === chunks.length - 1);
                // isSentenceEnd = _sentenceEndExp.test(chunk) || (i === chunks.length - 1);
                element = $("<p>" + chunk + "</p>").appendTo(container);
                  duration = Math.max(0.5, chunk.length * 0.08); //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
                  if (isSentenceEnd) {
                    duration += 0.6; //if it's the last word in a sentence, drag out the timing a bit for a dramatic pause.
                  }
                  //set opacity and scale to 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
                TweenLite.set(element, {autoAlpha:0, scale:0.5, z:0.01});
                //the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See http://www.greensock.com/v12/#slowmo and http://api.greensock.com/js/com/greensock/easing/SlowMo.html
                tl.to(element, duration, {scale:1.2, ease:SlowMo.ease.config(0.25, 0.7)}, time)
                  //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end. 
                        .to(element, duration, {autoAlpha:1, ease:SlowMo.ease.config(0.5, 0.7, true)}, time);
                  time += duration - 0.05;
                  if (isSentenceEnd) {
                    time += 0.6; //at the end of a sentence, add a pause for dramatic effect.
                  }
                }
            }

                deliverText(theTexts[winWord][ranText], 250);
        }

    }

    function reset(){
        TweenMax.to(winHeads, 0.5, {autoAlpha:0, scale:1, delay:0.5});
        TweenMax.staggerTo([elemContainer, startBtn], 1, {autoAlpha:1, delay:0.5}, 0.5);
    }

});