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
                    // "Introducing the Freedom Rebate International Employment Program (FRIEP), a time tested employment strategy. The FRIEP indenture program is legal in most underdeveloped countries. Our legal team keeps abreast of loopholes in the laws of nations, where it has been erroneously suggested that we support slavery.",
                    // "We will fight to protect your freedom. You will die for causes we decide for you. You will fight and die for the right reason. We will train your children to fight the good war. Freedom and glory await.",
                    // "We will promote your freedom to consume. Have no fear. We will bathe you in an endless stream of messages that speak to your subconscious, freeing your desire to consume more.",
                    // "Your liberties have been taken away from you in the name of Freedom. Enjoy the irony - be distracted from revolution by propaganda disguised as entertainment. Are you waiting for the next instalment of your favourite series? Do you feel entertained?",
                    // "Take two Freedom-inducing tablets every evening before bed. Enjoy the drowsy effect. Wallow in the dream-free dullness. At the start of your workday, take the Freedom-plus tablet, be productive. When the day overwhelms, take your evening pill. Freedom through medication.",
                    "Our Freedom to Choose program will free you from the drudgery of making choices. Leave the little things to us and focus on what really matters.",
                    // "Feel free to opt out at anytime. Opt out of everything that annoys you. Our Special Filtration Application will free you from unnecessary thinking about what is free and what is not. Fear not. Be free.",
                    // "Win your Freedom today. Our special Freedom Games Network allows you to play various scenarios to gain your freedom. Join now and gain bonus weapons. Our virtual Freedom Points are tradable in real life. You can help others gain their Freedom.",
                    // "Be free of fear. Our fully tested and patented Fear Abatement Medication will free you of all worry. Take the medication as directed, sit back and enjoy the enclosed DVD. No tricks or gimmicks. Trust us to free you of all fears.",
                    // "Do you feel trapped in a mundane existence? Do you want to free yourself of feelings of inferiority? Our program includes our patented Expansion Lenses, legal weaponry and special medications. Be the first one on your street to be truly free."
                ]),
        order: _.shuffle([
                    // "Has your country been a subject or an object of history? Do you feel downtrodden, or emulated? Do you fit within the natural order of things? Take stock, it's never too late to take up arms. Order through conflict.",
                    // "There is silence on all the important matters, we move from crisis to crisis as if happiness is a vice. Don't fret; things will be set right, far right. Order will be restored through corruption and threats. This is the natural order of things.",
                    "Opinion strikes like a gavel. That sound you hear is a hardwood mallet brought down in your brain to establish Order. No discussion is necessary.",
                    // "Racism, xenophobia, and superiority syndromes are terrific tools to bring people on side. Corruption and violence will keep them on-message. Well-placed rumours will pay dividends. Buy into the program, or chose to live a drab life of desperation.",
                    // "Order is everything. Join the Order of Orders today. The OoO is a blanket organization that guarantees you a place in line for what you really deserve. Act now or lose your place in the queue.",
                    // "Subscribe to our program today. Learn how to apply our Word Revolution Software. Change conversational words and phrases like 'war' or 'ethnic cleansing' to 'moving borders', 'involvement', or 'intervention'. Propaganda is the future.",
                    // "Your order is waiting. Delay no longer. This order has been placed for your benefit at no extra charge. Click the Order icon and accept delivery. This order will change your life.",
                    // "Arrange your life. Put everything in proper order. First things first. What are your desires? What is important to you? Answer the survey questions and then use our free Order First Program to get a handle on your life.",
                    // "Law and Order: do you miss them? Do you wonder how we got to this state? Do you understand that we got here on plastic wings manufactured at bargain prices? Would you like a plastic halo as well? Do you deserve it? Does it matter?",
                    // "Internal memo: Do not veer from the message! A vote for the Order Party is a vote for order. If elected we will bring order into the lives of the people. We believe that order will ensure a secure future for them and their children. Order. Order. Order. Easy to understand. That is our simple and entire election platform."
                ]),
        natural: _.shuffle([
                    "We ignore the sheer, unharnessed energy of the oceans, while crawling about on the planet like ants carrying grains of sugar from a limited source. Given that God put the oil in the ground, this is only natural.",
                    // "The pre-given world of natural things has lost its relevance in this modern age. Some critics say all things are natural, but this only applies if you are able to drop your morality and wait for the logical end of natural things. You won't have long to wait.",
                    // "Natural Whole Foods Group Bulletin: It's only natural to pay a premium for Whole Foods because NWFG has created a lifestyle brand that delivers on its promise. Our product will monitor you constantly to ensure you get the most benefit from the NWFG lifestyle.",
                    // "It is only natural to feed living things to living things in order for certain things to stay alive. Join our Natural Balance Network to ensure that only the most important things stay alive - namely our pets and us. Trust the NBN to work for you.",
                    // "All of our products have Natural written clearly on the labels. The word natural means something to us and we want it to mean the same thing to you.",
                    // "We are naturally good. Check us out today. Yes, most of our products are made or caused by humankind, but we can be trusted to use only ingredients that are cleared as being natural by government agencies that hold your health as the primary concern. If you can't trust them, whom can you trust?",
                    // "Be natural. Use our products to ensure that only natural ingredients pass your lips or reside on your skin. If you are uncertain, please read our new and improved definition of natural. Take our online survey to guarantee that the definitions are generated to suit your modern lifestyle.",
                    // "At Natural Labels INC, we develop labels for your products. Our labels are certified and patented. By using one of our labels on your product, you are guaranteed to attract customers who want only natural goods. Our labels are recognized in all Western countries and come in all major languages. Get natural.",
                    // "The Natural Defence Council can help you. We offer policing services to elite customers who need to defend themselves against protest and slander. We specialize in defending companies that develop and deliver atomic energy. Our slogan - Atoms Are Natural - is internationally recognized. Act now and receive a rebate on electric fences."
                ]),
        loyalty: _.shuffle([
                    "He was loyal to the party and voted against his conscience, this was made possible by blind faith in the Leader.",
                    // "I have a loyalty that runs in my bloodstream, when I lock into someone or something, you can't get me away from it. I commit thoroughly. That's in policy, a deal, and a commitment. Loyalty, right or wrong.",
                    // "I'll take fifty percent efficiency to get one hundred percent loyalty. That's how you run a country.",
                    // "What history are you loyal to? Would you swear by a history? Does it include bones? Are you loyal to certain bones?",
                    // "Loyalty is an important technology. Our Loyalty program operators are ready to get you up and running with our innovative Smart Button. Loyalty is a click away.",
                    // "One session with Dr Justin Love, our Loyalty Sessionist, and you will be rid of any instances of disloyalty, faithlessness, falseness, falsity, inconstancy, infidelity, perfidiousness, perfidy, treachery, or unfaithfulness. Certification guaranteed.",
                    // "Revolutionaries and Fascists share a need for lackeys. Behind the zealots are lackeys who perform deeds to sustain the ideologies. If you are uncertain, use our nifty secure online scripts to choose your ideology. We have a secure sign-up program so you can begin action today. Lackeys are the future.",
                    // "Purchase the Loyalty Now Device. Stay loyal to the people and values you love. This device will alert you when you stray. Painless and tasteless. Fill out the questionnaire and then leave the rest to us. Act now to ensure your loyalty.",
                    // "Enjoy our packaging and conventions at Loyalty INC. Your loyalty is important to us. Yes, we want your money but we want you to love us too. We are not culture politics masquerading as technology. We are as important as religion.",
                    // "All workers strive for promotion. Attend our cost effective seminars and learn how to develop a hierarchy of managerial positions where workers feel promoted but receive little remuneration and can affect nothing. Use our time-tested methods to ensure that your workers are happy, productive and loyal."
                ]),
        justice: _.shuffle([
                    "A system of justice can execute an innocent person. This makes of Justice a lottery system, not a system of justice.",
                    // "Be honest: would you prefer justice or wealth? Would immense wealth be balm to sooth all memory of pain or anger?",
                    // "Purchase some Justice now. Justice does not come cheap, but our program can help you attain what you so justly deserve. Act now; don't wait until the long arm has reached your door. Be prepared by allowing us to submit to Justice's special prepaid plan.",
                    // "At Justice INC International we understand that Justice is an evolving concept. What was just in ancient Rome is no longer just in the modern world. Help us to ensure that justice reigns across all cultures and religions. Upload our Justice software to stay abreast of issues. Our software will automatically fill out petitions and surveys for you.",
                    // "Were you born wounded? Do you understand the relationship between blood and obedience? Fear not. Our programs are designed to ensure that justice has no due date. We supply weapons and instructions on how to obtain justice for you and your family. Special deals arranged for people presently in Diasporas.",
                    // "Enjoy our free personal web server that implements a distributed social networking service for people in Diasporas. Our worldwide mobile servers allow you to be whoever you want to be. No requirement to use your real identity. Our special FATE system will explain everything to set your mind at ease.",
                    // "Shop Justice today. Our concept of one-size fits all ensures moral rightness based on ethics, rationality, law, natural law, religion, equity and fairness. We are the perfect fit for you. All of our clothing is labelled and colour coordinated so that people around you understand that you are deserving of justice.",
                    // "Justice is touring the world. We are following the Injustice tour by days. Justice tour merchandise will bring you closer to resolving all issues related to Injustice. Purchase merchandise online prior to a tour location nearest you and win a seat on the floor of Justice.",
                    // "We are a human rights organization that secures justice for victims of slavery and sexual exploitation. Get together with family, friends and other victims, pool your resources and submit a claim. The highest bids ensure that your persecutors will be the slaves of tomorrow."
                ]),
        truth: _.shuffle([
                    // "What is Truth if not put to the test? Truth does not come with a comfortable chair and a fire in the stove, snuggled up with a Good Book? That is comfort. Truth is in the fire.",
                    "It might be said that the meaning of one word is always another word. Apply this to Truth, or someone will do it for you.",
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
                    // "The Garbage Equality International mandate guarantees that all nations share equally in garbage disposal, based on population. A recent report states that over-populated areas should learn to use garbage as fuel and building material. GEI social programs include training sessions. Critics believe the sessions are redundant.",
                    // "The Revolution of the Word is a worldwide organization. We are running a contest, open to all nationalities. Send us any word that you would like to revolutionize, such as Equality. We will give it a revolting meaning.",
                    // "Equality is a new breakfast cereal enjoyed by young and old alike. Pour a bowl of Equality every morning for a balanced diet of facts and lies. Equality is guaranteed to stick to your convictions.",
                    // "Join the Equality Network, where equal rights are negotiable. Shuck your chains. Stay on top of daily events that affect your rights. Learn to spread equality through our worldwide network of Slave Technologists.",
                    // "Play Equality, a new international role-playing game. This time-line based game lets you develop characters including slave-traders, stockbrokers, revolutionaries, or activists. The Level Playing Field function is still under development.",
                    // "Purchase some Equality today. Do not hesitate. It is the only way to ensure that your community measures up. Our program of Equal For All levels the playing field. Subscribe to Mercenary Weekly and learn how to order a team of specialists to equalize your neighbourhood.",
                    // "Our organization advocates equality for all religions, elevating all monotheistic gods to the same plane. Our unique and patented software will hack all monotheistic websites and rename the god based on algorithms that remain a mystery, even to us. Donate today to elevate your god.",
                    // "Do you feel unequal and downtrodden? Are concerned about racial equality and feminist programs affecting you and your children? Do you feel whipped by the backlash? Join The Backlash Defence Society and receive our newsletter outlining how to protect yourself. Join soon and get free bumper stickers."
                ]),
        hope: _.shuffle([
                    // "Hope Springs INC: for all your suspension needs. Suspend grief, suspend worry, suspend anger, suspend lies. Every tune-up includes a minimum 150 Hope Points. Bonus points if you upgrade to the Eternal Club: suspend yourself in hope.",
                    "Peddling the semblance of hope, every lottery ticket bought inflates idle wishes, devaluing any firm grounds for optimism. This is a guarantee.",
                    // "Have you ever hoped for things to be different? Our program offers Hope. Remember your loved ones at a fraction of the cost of a real relationship. Available as gift subscriptions. We restore lost Love. Act now!",
                    // "Take one of our Hope pills and forget your worries. Live in a dreamland of hope where everything is possible. Experience the joy of forgetfulness. Hope Pharmacies makes the world a better place.",
                    // "Purchase Hope Insurance. Don't be left hanging from a thread. We ensure that Hope is an important aspect of your life. Don't be left with no hope. Ensure today and continue hoping. It's all we have.",
                    // "Purchase some Hope Points today. Guaranteed to last a lifetime. Transferable after death to ensure that your children are enrolled in the Hope Program and can continue to hope for a better world.",
                    // "We provide Nano Hope Inserts for people in under-developed nations. The inserts broadcast inspirational quotations 24/7 directly into their brains. The quotations are in all languages and religions. Act now and receive our advanced NHI broadcast software that allows you to chose the quotations.",
                    // "We are presently accepting applications for a new Hope Administrator to oversee overseas operations. You will administer a vanguard of Hope Ministers. Your job will be maintaining certain levels of hope in certain countries that have little or no hope. You should be photogenic with no visible defects.",
                    // "Do you have little hope for the future? Join our growing online organization, Hope For the Future, and bank hope for those days when you feel no hope. Our unique Hope Rewards program will tabulate and disseminate hope on the basis of need. Our inspirational slogans will prop you up. Share them on your social networks and spread the word."
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
                    // "Don't fall into the trap of over-valuing the future. Don't trade your present for an uncertain future. Use our online Modern Age Value System for everyday choices. Trust us to ground you in the present. Contact us now. This is a limited-time offer.",
                    "Language is the heaviest of burdens. Poor translation can be costly. Don't trust anyone but us to translate your desires and goals. Speak the language of your country. Value purity.",
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
        placeTwn = TweenMax.to(location, amount, {bezier:{curviness:1.5, values:path}, ease:Linear.easeNone}),
        muzak = new buzz.sound( "sounds/muzak.mp3", {
            preload: true,
            loop: true
        }),
        whizzspin = new buzz.sound( "sounds/hitSpin-1.mp3", {
            preload: true,
            loop: false
        }),
        expiryDue = false;

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
            winHead = winHeads[ranSpin],
            winPos = spinPos[ranSpin];
            // showHead = winHead;

            console.log("SPIN CLICKED - winWord is " + winWord + " + winHead is " + winHead + " + winPos is " + winPos);

        // set up
        TweenLite.set(elemContainer, {rotation:0});
        TweenLite.set([startBtn, spinMarker], {autoAlpha:0});
        TweenMax.set(message, {autoAlpha:0});
        TweenMax.to(theTexts, 0.5, {autoAlpha:0});

        whizzspin.play();

        if (theTexts[winWord] === undefined) {

            // console.log("theTexts["+ winWord + "] array length is " + theTexts[winWord].length);
            showMessage();
            reset();
        } else {

            currentGhost = theGhosts[winWord].pop();
            console.log("currentGhost pic is " + currentGhost);

            // REVOL animation - should be 5 in first line
            tl.to(elemContainer, 5, {rotation:winPos, ease:Circ.easeOut})
                //show spinMarker
                .to(spinMarker, 2, {autoAlpha:1}, "-=2")
                //show image
                .to(currentGhost, 2, {autoAlpha:0.15})
                .to(theTexts, 1, {autoAlpha:1}, "-=0.25")
                .to(elemContainer, 0.75, {autoAlpha:0}, "-=1")
                .to(winHead, 0.75, {autoAlpha:0.5, scale:1.05}, "-=1");

            // THESE DON'T WORK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // if (theTexts[winWord] !== undefined) {
            //     tl.to(winHead, 0.75, {autoAlpha:0.5, scale:1.05}, 7);
            // }

            // show winHead and also remove if showing for last time
            // if (theTexts[winWord].length <= 1) {
            //     tl.to(winHead, 0.75, {autoAlpha:0.5, scale:1.05, repeat:1, repeatDelay:1, yoyo:true}, 7.5);
            // } else {
            //     tl.to(winHead, 0.75, {autoAlpha:0.5, scale:1.05}, 7.5);
            // }

            tl.addCallback(animateCentreTexts, "-=1.5");
            //play muzak sound loop
            if ( muzak.isPaused() ) {
                console.log("sound was paused");
                tl.addCallback(playMuzak, 5);
            }
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

                deliverText(theTexts[winWord].pop(), 360);
                // deliverText(theTexts[winWord].pop(), 350);

                //for TESTING ONLY:
                //deliverText(theTexts.equality[7], 350);

        }

        function playMuzak(){
            muzak.play();
            muzak.setVolume(0).fadeTo(10, 2000);
        }

        // console.log("winWord is " + winWord + " & its array length is " + theTexts[winWord].length);

        // Remove the winWord & corresponding winPos & winHead if there are no texts left to display in that category
        if (theTexts[winWord] === undefined){
            showMessage();
        }
        else if (theTexts[winWord].length === 1) {

            expireWord(winWord, winHead, winPos);

            expiryDue = true;
        }

    }

    function reset(){
        TweenMax.to(winHeads, 0.5, {autoAlpha:0, scale:1, delay:0.5});
        TweenMax.staggerTo([elemContainer, startBtn], 1, {autoAlpha:1, delay:0.5}, 0.5);
         //fade out any pic that is in the centre
        TweenMax.to(currentGhost, 1, {autoAlpha:0, delay:0.75});

    }

    function expireWord(winWord, winHead, winPos){

        //need to make winHead disappear for future spins
        //TweenMax.to(winHeads, 1, {autoAlpha:0});

        winWords = _.without(winWords, winWord);
        winHeads = _.without(winHeads, winHead);
        spinPos = _.without(spinPos, winPos);
        

        console.log("REMOVE --- " + winWord + " --- because this is the last text in its array. Also remove winPos: " + winPos);
        // console.log("The winWords array length: " + winWords.length + " | spinPos length: " +spinPos.length + " | winHeads length: " + winHeads.length);
        console.log("The winWords are now: " + winWords);
    }

    function showMessage(){
        // console.log("Nothing left in that one so showMessage!");
        TweenMax.to(message, 0.5, {autoAlpha:1});
        // TweenMax.to(message, 0.5, {autoAlpha:1, repeat:1, repeatDelay:1.5, yoyo:true});
        // TweenMax.to(message, 0.5, {autoAlpha:1, repeat:1, repeatDelay:1.5, yoyo:true, onComplete:reset});
    }

});