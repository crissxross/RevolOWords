$(function(){
    var container = $("#the-texts"),
        _sentenceEndExp = /(\.|\?|!)$/g, //regular expression to sense punctuation that indicates the end of a sentence so that we can adjust timing accordingly
        startBtn = $("#start-anim"),
        spinMarker = $("#spin-marker"),
        ghostImages = $("#ghost-images"),
        winImages = $("#win-images"),
        winHeader = $("#win-header"),
        theTexts = {
        freedom: _.shuffle([
                    "Introducing the Freedom Rebate International Employment Program (FRIEP), a time tested employment strategy. The FRIEP indenture program is legal in most underdeveloped countries and our legal team keeps abreast of loopholes in the laws of other nations, where it has been erroneously suggested that we support slavery.",
                    // "We will fight to protect your freedom. You will die for causes we decide for you. You will fight and die for the right reason. We will train your children to fight the good war. Freedom and glory await.",
                    // "We will promote your freedom to consume. Have no fear. We will bathe you in an endless stream of messages that speak to your subconscious, freeing your desire to consume more.",
                    // "Your liberties have been taken away from you in the name of Freedom. Enjoy the irony - be distracted from revolution by propaganda disguised as entertainment. Are you waiting for the next instalment of your favourite series? Do you feel entertained?",
                    // "Take two Freedom-inducing tablets every evening before bed. Enjoy the drowsy effect. Wallow in the dream-free dullness. At the start of your workday, take the Freedom-plus tablet, be productive. When the day overwhelms, take your evening pill. Freedom through medication.",
                    // "Our Freedom to Choose program will free you from the drudgery of making choices. Leave the little things to us and focus on what really matters.",
                    // "Feel free to opt out at anytime. Opt out of everything that annoys you. Our Special Filtration Application will free you from unnecessary thinking about what is free and what is not. Fear not. Be free.",
                    // "Win your Freedom today. Our special Freedom Games Network allows you to play various scenarios to gain your freedom. Join now and gain bonus weapons. Our virtual Freedom Points are tradable in real life. You can help others gain their Freedom.",
                    // "Be free of fear. Our fully tested and patented Fear Abatement Medication will free you of all worry. Take the medication as directed, sit back and enjoy the enclosed DVD. No tricks or gimmicks. Trust us to free you of all fears.",
                    // "Do you feel trapped in a mundane existence? Do you want to free yourself of feelings of inferiority? Our program includes our patented Expansion Lenses, legal weaponry and special medications. Be the first one on your street to be truly free."
                ]),
        order: _.shuffle([
                    "Has your country been a subject or an object of history? Do you feel downtrodden, or emulated? Do you fit within the natural order of things? Take stock, it's never too late to take up arms. Order through conflict.",
                    // "There is silence on all the important matters, we move from crisis to crisis as if happiness is a vice. Don't fret; things will be set right, far right. Order will be restored through corruption and threats. This is the natural order of things.",
                    // "Opinion strikes like a gavel. That sound you hear is a hardwood mallet brought down in your brain to establish Order. No discussion is necessary.",
                    // "Racism, xenophobia, and superiority syndromes are terrific tools to bring people on side. Corruption and violence will keep them on-message. Well-placed rumours will pay dividends. Buy into the program, or chose to live a drab life of desperation.",
                    // "Order is everything. Join the Order of Orders today. The OoO is a blanket organization that guarantees you a place in line for what you really deserve. Act now or lose your place in the queue."
                ]),
        natural: _.shuffle([
                    "We ignore the sheer, unharnessed energy of the oceans, while crawling about on the planet like ants carrying grains of sugar from a limited source. Given that God put the oil in the ground, this is only natural.",
                    // "The pre-given world of natural things has lost its relevance in this modern age. Some critics say all things are natural, but this only applies if you are able to drop your morality and wait for the logical end of natural things. You won't have long to wait.",
                    // "Natural Whole Foods Group Bulletin: It's only natural to pay a premium for Whole Foods because NWFG has created a lifestyle brand that delivers on its promise. Our product will monitor you constantly to ensure you get the most benefit from the NWFG lifestyle."
                ]),
        loyalty: _.shuffle([
                    "He was loyal to the party and voted against his conscience, this was made possible by blind faith in the Leader.",
                    // "I have a loyalty that runs in my bloodstream, when I lock into someone or something, you can't get me away from it. I commit thoroughly. That's in policy, a deal, and a commitment. Loyalty, right or wrong.",
                    // "I'll take fifty percent efficiency to get one hundred percent loyalty. That's how you run a country.",
                    // "What history are you loyal to? Would you swear by a history? Does it include bones? Are you loyal to certain bones?",
                    // "Loyalty is an important technology. Our Loyalty program operators are ready to get you up and running with our innovative Smart Button. Loyalty is a click away.",
                    // "One session with Dr Justin Love, our Loyalty Sessionist, and you will be rid of any instances of disloyalty, faithlessness, falseness, falsity, inconstancy, infidelity, perfidiousness, perfidy, treachery, or unfaithfulness. Certification guaranteed.",
                    // "Revolutionaries and Fascists share a need for lackeys. Behind the zealots are lackeys who perform deeds to sustain the ideologies. If you are uncertain, use our nifty secure online scripts to choose your ideology. We have a secure sign-up program so you can begin action today. Lackeys are the future."
                ]),
        justice: _.shuffle([
                    "A rich man in Thailand harbored his murderous son in a garden of peacocks and palms.",
                    // "A system of justice can execute an innocent person. This makes of Justice a lottery system, not a system of justice.",
                    // "Be honest: would you prefer justice or wealth? Would immense wealth be balm to sooth all memory of pain or anger?"
                ]),
        truth: _.shuffle([
                    "What is Truth if not put to the test? Truth does not come with a comfortable chair and a fire in the stove, snuggled up with a Good Book? That is comfort. Truth is in the fire.",
                    // "It might be said that the meaning of one word is always another word. Apply this to Truth, or someone will do it for you.",
                    // "There is a hard kernel of Truth at the core, under our Plasticine lives. We can re-model as we wish, as we age, during trauma or glee - but the only way to reach the core is by stripping away the clay.",
                    // "The Competition Bureau prohibits making any deceptive representations for the purpose of promoting a product or a business interest. The provision does not apply if the advertised representation was a mistake. We all make mistakes.",
                    // "Truth can not withstand the light of day. Truth is generally unbearable. Don't stumble about in the dark; try our specially designed Seeker glasses. They will protect you from the darkest of Truths.",
                    // "He waved the Truth around and said he had proof, but at the end of the day he could not provide all the proofs. There is no such thing as partly true - is there?",
                    // "Maybe a few of the many bearded prophets who wander the planet have found the Truth. You can identify them by their burnt fingertips. Approach with caution, lest you get scorched.",
                    // "Truth resides in your gut. Truth is barely edible. It is indigestible. Our revolutionary Truth Pills enable you to stomach the truth. Free samples are available on the street corner, where all good drugs are sold.",
                    // "Act now on our special offer. Are you finding the Truth to be boring? Try our handy spice to pep up the Truth. It is offered in several subtle flavours and comes with a No Truth guarantee. Perfect for parties or election campaigns.",
                    // "History and slogans are most always at odds. Although History attempts to reveal the Truth of human matters, slogans will grab and hold the public attention. Trust in our Slogan Generator to veil the Truth of anything. Act now and receive a free Proof Slicer."
                ]),
        equality: _.shuffle([
                    "What did you expect? Equality? Nothing equals nothing else. There is never enough time to balance the odds. Mortality draws the line. We carry our differences to the grave.",
                    // "The Garbage Equality International mandate reads: We guarantee that all nations will share equally in garbage disposal - based on population. A recent report states that over-populated areas should learn to use garbage as fuel and building material. GEI social programs include training sessions. Critics believe the sessions are redundant.",
                    // "The Revolution of the Word is a worldwide organization. We are running a contest, open to all nationalities. Send us any word that you would like to revolutionize, such as Equality. We will give it a revolting meaning.",
                    // "Equality is a new breakfast cereal enjoyed by young and old alike. Pour a bowl of Equality every morning for a balanced diet of facts and lies. Equality is guaranteed to stick to your convictions.",
                    // "Join the Equality Network, where equal rights are negotiable. Shuck your chains. Stay on top of daily events that affect your rights. Learn to spread equality through our worldwide network of Slave Technologists.",
                    // "Play Equality, a new international role-playing game. This time-line based game lets you develop characters including slave-traders, stockbrokers, revolutionaries, or activists. The Level Playing Field function is still under development."
                ]),
        hope: _.shuffle([
                    "Hope Springs INC: for all your suspension needs. Suspend grief, suspend worry, suspend anger, suspend lies. Every tune-up includes a minimum 150 Hope Points. Bonus points if you upgrade to the Eternal Club: suspend yourself in hope.",
                    // "Peddling the semblance of hope, every lottery ticket bought inflates idle wishes, devaluing any firm grounds for optimism. This is a guarantee.",
                    // "Have you ever hoped for things to be different? Our program offers Hope. Remember your loved ones at a fraction of the cost of a real relationship. Available as gift subscriptions. We restore lost Love. Act now!",
                    // "Take one of our Hope pills and forget your worries. Live in a dreamland of hope where everything is possible. Experience the joy of forgetfulness. Hope Pharmacies makes the world a better place."
                ]),
        security: _.shuffle([
                    "The drone pilot shifted in his seat. There was a flash on the screen: the explosion. Parts of the building collapsed. The child disappeared. One less terrorist in the making.",
                    // "In a signature strike, a person is made a target not because of their identity but because of certain signatures - codified justifications for killings in a secure world.",
                    // "In today's day and age, every computer should be protected. It is best to wear a tin-foil hat while browsing the web. Maybe also surround your computer with talismans or lit candles. Feel secure.",
                    // "Feel secure in the knowledge that Home Security is working for you. Our program of drone attacks and targeted assassinations is making your world more secure. Stay glued to your screen and watch from the safety of your home.",
                    // "Purchase some Security today. Be secure in the knowledge that our secrets are keeping you safe. Install the Security Now program on you computer and mobile device and help us to keep you secure and safe from nasty secrets.",
                    // "Evil people are trying to compromise the status quo. Our Secure Now Network will help spread the Special Filtration Program to other deserving computers and mobile devices. Protect your friends from malicious security breaches.",
                    // "To ensure your security of information, apply our Western Vision Principle Generator, where all seemingly impartial words are vetted through our special filtration software. Do not be taken unawares. Protect your point of view.",
                    // "Trust our Secure Investments Program to provide financial security for you and your family. We invest in sure things like armaments and drugs. Sit back and watch your SIP investments grow.",
                    // "Your data is safe with us. Our secure offshore servers are guarded 24/7 by an army of nano-bots programmed to confuse data thieves by directing them to less secure servers.",
                    // "Our free online International Safety & Security Handbook teaches you how to ensure security for you and your online contacts. Based on the science of Feng Shui you will learn the best placement for your computer and mobile devices."
                ]),
        value: _.shuffle([
                    "Don't fall into the trap of over-valuing the future. Don't trade your present for an uncertain future. Use our online Modern Age Value System for everyday choices. Trust us to ground you in the present. Contact us now. This is a limited-time offer.",
                    // "Language is the heaviest of burdens. Poor translation can be costly. Don't trust anyone but us to translate your desires and goals. Speak the language of your country. Value purity.",
                    // "This moment is worth all of your futures. Monetize your present for full value using our nifty new Value Added generator. Make your profile work for you.",
                    // "Value human rights. Struggle against the self-righteous whose intolerance place ideals above people. Beware of the cold fire that manifests in zealots. Be charitable. Be human.",
                    // "Language is under threat. Meaning is losing meaning. We offer a helpful guide to what things really mean. Don't contribute to the \"slobber of disconnected vowel noises.\" Be meaningful.",
                    // "Value International is an online organization that can help people order their values. Values can be traded or changed. Nonsensical trifles or serious matters are given equal weight. Values can be stored for later use, or donated as gifts.",
                    // "Value speed. Be ecstatic. Keep up with technology. For a premier experience, update and upgrade daily. Follow the instructions, you have nothing to lose.",
                    // "All of our products include value-added gifts. Fill out our online questionnaire so we can serve Values that are custom-designed to your needs and desires. Trust our tasty cookies.",
                    // "Purchase some Value today. Our Single Button Program (SBP) ensures that what is of Value to you is maintained in your life. Simply fill out our questionnaire and choose the SBP. Keep our Value in your life.",
                    // " There is nothing more valuable than peace of mind. Try our new Blinders Program free for the first month. One size fits all. If you do not feel more at ease, return the blinders at no charge. Warning: we accept no responsibility if removing the blinders causes a loss of value in your life."
                ])
    },
        winWords = ["natural","order","freedom","value","security","hope","equality","truth","justice","loyalty"],
    // REVOL
        amount = 10,
        indRotation = (360 / amount),
        words = ["Freedom","Order","Natural","Loyalty","Justice","Truth","Equality","Hope","Security","Value"],
        winHeads = ["#natural","#order","#freedom","#value","#security","#hope","#equality","#truth","#justice","#loyalty"],
        spinPos = [738,774,810,846,882,918,954,990,1026,1062],//faster spin
        // spinPos = [1098,1134,1170,1206,1242,1278,1314,1350,1386,1422],
        theGhosts = {
            equality: _.shuffle(["#e-0","#e-1","#e-2","#e-3","#e-4","#e-5","#e-6","#e-7","#e-8","#e-9"]),
            freedom: _.shuffle(["#f-0","#f-1","#f-2","#f-3","#f-4","#f-5","#f-6","#f-7","#f-8","#f-9"]),
            hope: _.shuffle(["#h-0","#h-1","#h-2","#h-3","#h-4","#h-5","#h-6","#h-7","#h-8","#h-9"]),
            justice: _.shuffle(["#j-0","#j-1","#j-2","#j-3","#j-4","#j-5","#j-6","#j-7","#j-8","#j-9"]),
            loyalty: _.shuffle(["#l-0","#l-1","#l-2","#l-3","#l-4","#l-5","#l-6","#l-7","#l-8","#l-9"]),
            natural: _.shuffle(["#n-0","#n-1","#n-2","#n-3","#n-4","#n-5","#n-6","#n-7","#n-8","#n-9"]),
            order: _.shuffle(["#o-0","#o-1","#o-2","#o-3","#o-4","#o-5","#o-6","#o-7","#o-8","#o-9"]),
            security: _.shuffle(["#s-0","#s-1","#s-2","#s-3","#s-4","#s-5","#s-6","#s-7","#s-8","#s-9"]),
            truth: _.shuffle(["#t-0","#t-1","#t-2","#t-3","#t-4","#t-5","#t-6","#t-7","#t-8","#t-9"]),
            value: _.shuffle(["#v-0","#v-1","#v-2","#v-3","#v-4","#v-5","#v-6","#v-7","#v-8","#v-9"])
        },
        currentGhost,
        message = $("#message"),
        element,
        elemContainer = $("div#elemContainer"),
        path = [{x:0,y:0},{x:220,y:-220},{x:440,y:0},{x:220,y:220},{x:0,y:0}],
        location = {x:path[0].x,y:path[0].y},
        placeTwn = TweenMax.to(location, amount, {bezier:{curviness:1.5, values:path}, ease:Linear.easeNone});

        // for TESTING ONLY - Are arrays SHUFFLED? (using underscore)
        console.log("shuffled theGhosts.equality: " + theGhosts.equality);
        console.log("shuffled theGhosts.freedom: " + theGhosts.freedom);
        console.log("shuffled theGhosts.hope: " + theGhosts.hope);
        console.log("shuffled theGhosts.justice: " + theGhosts.justice);
        console.log("shuffled theGhosts.loyalty: " + theGhosts.loyalty);
        console.log("shuffled theGhosts.natural: " + theGhosts.natural);
        console.log("shuffled theGhosts.order: " + theGhosts.order);
        console.log("shuffled theGhosts.security: " + theGhosts.security);
        console.log("shuffled theGhosts.truth: " + theGhosts.truth);
        console.log("shuffled theGhosts.value: " + theGhosts.value);

        // console.log("shuffled theTexts.equality: " + theTexts.equality[5]);
        // console.log("shuffled theTexts.freedom: " + theTexts.freedom[9]);
        // console.log("shuffled theTexts.hope: " + theTexts.hope[3]);
        // console.log("shuffled theTexts.justice: " + theTexts.justice[2]);
        // console.log("shuffled theTexts.loyalty: " + theTexts.loyalty[6]);
        // console.log("shuffled theTexts.natural: " + theTexts.natural[2]);
        // console.log("shuffled theTexts.order: " + theTexts.order[4]);
        // console.log("shuffled theTexts.security: " + theTexts.security[9]);
        // console.log("shuffled theTexts.truth: " + theTexts.truth[9]);
        // console.log("shuffled theTexts.value: " + theTexts.value[9]);

        // console.log("Starting length of winWords: " + winWords.length);
        // console.log("Original array of winWords: " + winWords);
    

    // place REVOL words in a CIRCLE
    for(i = 0; i < amount; i++)
    {
        placeTwn.time(i);
        // console.log(location.x + ' // ' + location.y);
        element = '<div class="element" id="element' + i + '">' + words[i] + '</div>';
        elemContainer.append(element);
        TweenMax.set($("div#element" + i), {x:location.x - 70, y:location.y + 210,rotation:((indRotation * i )- 90)});
    }

    // Initial state of UI
    TweenMax.set([spinMarker,".img", "#win-header h3"], {autoAlpha:0});
    TweenMax.set(".pic", {borderRadius: "50%", autoAlpha:0});
    TweenMax.set(message, {autoAlpha:0});


    startBtn.on("click", startRevolution);

    // REVOL ANIMATION
    function startRevolution(){
        var tl = new TimelineMax(),
            ranSpin = Math.floor(Math.random()*10),
            winWord = winWords[ranSpin],
            winHead = winHeads[ranSpin];

        // set up
        TweenLite.set(elemContainer, {rotation:0});
        TweenLite.set([startBtn, spinMarker], {autoAlpha:0});
        TweenMax.to(theTexts, 0.5, {autoAlpha:0});

        // get the 'winning' category ghost image
        currentGhost = theGhosts[winWord].pop();
         //for TESTING ONLY:
        // currentGhost = theGhosts.natural[2];

            console.log("currentGhost pic is " + currentGhost);

            // console.log("The winWords length: " + winWords.length);
            // console.log("The winWords: " + winWords);

        if (theTexts[winWord].length === 0) {

            showMessage();
            reset();
        } else {

            // REVOL animation - should be 5 in first line
            tl.to(elemContainer, 5, {rotation:spinPos[ranSpin], ease:Circ.easeOut})
                //show spinMarker
                .to(spinMarker, 2, {autoAlpha:1}, "-=2")
                //show image
                .to(currentGhost, 2, {autoAlpha:0.15})
                .to(theTexts, 1, {autoAlpha:1}, "-=0.25")
                .to(elemContainer, 0.75, {autoAlpha:0}, "-=1")
                .to(winHead, 0.75, {autoAlpha:0.5, scale:1.05}, "-=1");
            tl.addCallback(animateCentreTexts, "-=1.5");

        }   


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

                deliverText(theTexts[winWord].pop(), 350);

                //for TESTING ONLY:
                // deliverText(theTexts.freedom[4], 350);

        }

        console.log("winWord is " + winWord + " & its array length is " + theTexts[winWord].length);

        // Remove the winWord if there are no texts left to display in that category
        // if (theTexts[winWord].length === 1) {

        //     winWords = _.without(winWords, winWord);

        //     console.log("REMOVE --- " + winWord + " --- because this is the last text in its array");
        //     console.log("The winWords length: " + winWords.length);
        //     console.log("The winWords: " + winWords);
        // }

    }

    function reset(){
        TweenMax.to(winHeads, 0.5, {autoAlpha:0, scale:1, delay:0.5});
        TweenMax.staggerTo([elemContainer, startBtn], 1, {autoAlpha:1, delay:0.5}, 0.5);
         //fade out any pic that is in the centre
        TweenMax.to(currentGhost, 1, {autoAlpha:0, delay:0.75});
    }

    function showMessage(){
        // console.log("Nothing left in that one so showMessage and reset!");
        TweenMax.to(message, 0.5, {autoAlpha:1, repeat:1, repeatDelay:1.5, yoyo:true});
        // TweenMax.to(message, 0.5, {autoAlpha:1, repeat:1, repeatDelay:1.5, yoyo:true, onComplete:reset});
    }

});