
let app = angular.module("myHealthy", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {


    $routeProvider.


    when('/gain-muscle-mass', {templateUrl: 'partials/gain-muscle-mass.html', controller: 'GainMuscleMass'}).
    when('/weight-loss', {templateUrl: 'partials/weight-loss.html', controller: 'WeightLoss'}).
    when('/energy', {templateUrl: 'partials/energy.html', controller: 'EnergyCtrl'}).
    otherwise({redirectTo: '/gain-muscle-mass'});



}]);


app.controller("GainMuscleMass", ["$scope", function ($scope) {

    $scope.creatineSupplement = "Creatine";
    $scope.creatineDescription = "Creatine is made from three amino acids: arginine, glycine and methionine. " +
        "Anecdotal reports and scientific studies alike find that guys who take creatine gain a good 10 pounds or more of bodyweight and increase strength dramatically. " +
        "Creatine works in a number of ways. For one, it increases the amount of fast energy in your muscles needed to perform reps in the gym. " +
        "The more of this fast energy that's available, the more reps you can do with a given weight, allowing you to get bigger and stronger in the long run. " +
        "Creatine also draws more water into your muscle cells, placing a stretch on the cell that increases long-term growth. " +
        "Most recently, creatine has been found to increase levels of insulin like growth factor-1 (IGF-1) in muscles, which is critical for stimulating growth.";

    $scope.creatineImage = "./images/gain-mass/1-creatine.jpg";

    $scope.aminoSupplement = "Amino Acids (BCAA)";
    $scope.aminoDescription = "The term branched-chain amino acids refers to leucine, isoleucine and valine, the absolute most important amino acids for repairing and building muscle tissue. " +
        "Leucine is the most critical of the three, as research shows that it can stimulate muscle protein synthesis on its own. Yet it's still best to take all three together, since they work in synergy to provide a multitude of benefits, including muscle growth, " +
        "increased energy during workouts, the blunting of cortisol (a catabolic hormone that inhibits testosterone and increases muscle breakdown) and decreased delayed-onset muscle soreness. ";

    $scope.aminoImage = "./images/gain-mass/2-bcaa.jpg";

    $scope.fishOilSupplement = "Fish oil";
    $scope.fishOilDescription = "Fish oil is one of the best supplements you can take for your general health, particularly because it helps lower inflammation." +
        " And when it comes to working out, less inflammation means faster muscle recovery, says Jalali. Plus, " +
        "Omega-3 fatty acids help your muscles synthesize bulk-building protein better, according to a 2012 study in Clinical Science. Aim for 1 to 2 grams of a supplement with both EPA and DHA per day, suggests St. Pierre.";

    $scope.fishOilImage = "./images/gain-mass/3-fish-oil.jpg";

    $scope.betaAlanineSupplement = "Beta Alanine";
    $scope.betaAlanineDescription = "One of the best weapons against muscle fatigue is carnosine, a substance that is abundant in your muscles in order to help prevent acid build up. But your carnosine supply is limited to the pool of its root enzymes, amino acids l-histidine and beta-alanine. That means supplementing with beta-alanine helps replenish your stores of carnosine." +
        " In fact, a 2010 study in Nutrients found that taking 800 mg of the amino acid multiple times a day elevated muscle carnosine levels by as much as 66%. Why it’s worth it: Brazilian research found that taking beta-alanine supplements can help your muscles’ endurance and specifically your performance during high intensity exercises like weight " +
        "lifting, meaning you can work out harder. Plus, the supplement has been shown to support lean muscle mass and enhance muscle fiber synthesis, says Jalali. Bonus: A study in the International Journal of Sports Nutrition and " +
        "Exercise Metabolism found that guys who took a combination of both creatine and beta-alanine gained more lean mass and lost more body fat than guys who took creatine alone. Since it has a limited half-life in the body, most research suggests taking 800 mgs of beta-alanine at least four times a day.";

    $scope.betaAlanineImage = "./images/gain-mass/4-beta-alanine.jpg";

    $scope.wheyProteinSupplement = "Whey Isolate Protein";
    $scope.wheyProteinDescription = "Whey tops the list of mass-gain supplements because it's the most crucial for pushing protein synthesis.\n" +
        " Whey is a milk protein that has a high level of branched-chain amino acids (BCAAs, No. 4 on our list).\n" +
        " Bottom line: Whey takes the crown because it digests fast and gets to your muscles rapidly to start building muscle.\n" +
        " Whey also contains peptides (small proteins) that increase blood flow to the muscles.\n" +
        "This is why we always recommend consuming whey protein immediately after training.";

    $scope.wheyProteinImage = "./images/gain-mass/5-Whey-Isolate-Protein.jpg";

}]);



app.controller("WeightLoss", ["$scope", function ($scope) {

    $scope.proteinSupplement = "Whey Protein";
     $scope.proteinDescription = "It’s no secret that protein is a gym junkie’s best friend. But it actually does more than just carve cut muscles—a 2014 meta-analysis in the Journal of the American College of Nutrition " +
         "found that people lost roughly 10 pounds after incorporating whey protein into their diet." +
         " And the milk derivative actually outperforms other protein sources: Overweight individuals who drank one whey protein shake a day lost more weight than those who drank a soy protein shake, according to a study in the Journal of Nutrition.\n" +
         "\n" +
         "It works in a few ways: Whey suppresses your appetite, therefore helping you eat less, but it’s also one of the best aids in building muscle, says Franci Cohen, certified nutritionist, exercise physiologist, and founder of Fuel Fitness in Brooklyn. " +
         "“Muscle has a higher metabolic rate than fat, so every pound of fat you replace with muscle in turn increases your metabolism and fat-burning abilities a bit more,” she explains. Plus, because it contains the same molecules as carbs and fats, plus one more (nitrogen), " +
         "protein requires more energy to digest, so you’ll burn more calories as your body processes the nutrient, Cohen adds.";

    $scope.wheyProteinImage = "./images/weight-loss/1-whey-protein.jpg";

    $scope.caffeineSupplement = "Caffeine (Methylxanthine)";
    $scope.caffeineDescription = "A little jolt has been linked to a whole slew of health benefits, from improving alertness to lowering risk for cancer, but it’s also one of the best—if not the best—researched ergogenic " +
        "aids available today, says Rehan Jalali, certified sports nutritionist and president of the Supplement Research Foundation. Several studies have shown caffeine helps promote fat oxidation—or your body’s " +
        "ability to break down large fat molecules to use as energy—as well as both weight and fat loss in active people, he adds. Whereas most of the health benefits come from its antioxidants, caffeine helps you lose fat by stimulating your central nervous system." +
        " This encourages the release of several molecules and nutrients in your body, including stored fat to be burned for energy and calcium to help muscle contraction. Plus it can help you work out harder: " +
        "In a study in the Journal of Applied Physiology last year, guys who ingested caffeine before a workout burned more calories during, ate less calories after, and actually enjoyed their gym time more than " +
        "when they hit the weights without the kick. But cap your daily intake at 400 mg—too much of a jolt can increase anxiety, your risk of cardiovascular disease, and insulin sensitivity which can actually cause you to gain weight.";

     $scope.caffeineImage = "./images/weight-loss/2-caffeine.jpg";

     $scope.greenTeaSupplement = "Green Tea Extract";
     $scope.greenTeaDescription = "“Green tea extract may increase fat oxidation and even stimulate brown adipose tissue thermogenesis—special fat cells that can actually help speed up your metabolism, " +
         "which is good news for anyone looking to lose body fat,” says Jalali. The key is in the plant’s phytochemicals, particularly " +
         "epigallocatechin gallate (ECGC), which a study in the European Journal of Clinical Nutrition found, " +
         "at low doses, can increase your fat oxidation by 33 percent. Jalali advises looking for a supplement with 50% EGCG and 90% polyphenols for the best burn.";

     $scope.greenTeaImage = "./images/weight-loss/3-green-tea-extract.jpg";

     $scope.glutamineLossSupplement = "Glutamine";
     $scope.glutamineLossDescription = "The most abundant amino acid naturally produced by your body, glutamine is found in the largest amounts in your muscles, helping repair them, maintain a healthy gut, and stabilize your blood sugar. " +
         "A study last year in the European Journal of Clinical Nutrition found that without changing their diets at all, " +
         "people lost weight after taking glutamine supplements for four weeks, likely because it helped boost glucose metabolism.";

     $scope.glutamineLossImage = "./images/weight-loss/4-glutamine.jpg";

     $scope.chitosanSupplement = "Chitosan";
     $scope.chitosanDescription = "This fiber, commonly called “shark cartilage,” comes from the exoskeletons of insects and crustaceans. " +
         "Research is mixed, but a large study analysis in the Journal of Obesity found that when people took chitosan twice a day with food, they had significantly lower BMIs and body fat as well as less bloating and flatulence than people who took a placebo. " +
         "It doesn’t have magical fat burning abilities, but, because it’s a type of dietary fiber, it may help keep you full longer, which in turn leads to you eating less, Cohen explains.";

     $scope.chitosanImage = "./images/weight-loss/5-chitosan.jpg";

     $scope.hcaSupplement = "Hydroxycitric acid (HCA)";
     $scope.hcaDescription = "Derived from a salt taken from the rind of a Southeast Asian dried fruit plant, HCA helps suppress your appetite, reduce the amount of fat your body absorbs from your diet, and increase your metabolism, explains Cohen. When compared to taking a placebo, " +
         "HCA supplements can help decrease the amount of visceral, subcutaneous, and total fat, according to a 2011 British study. " +
         "HCA is often sold in the form of garcinia extract—the name of the plant it’s derived from. But this is useless if it doesn’t have the right amount of the active ingredient, Cohen adds. Look for either a pure HCA supplement or a garcinia extract with 50 percent HCA.";

     $scope.hcaImage = "./images/weight-loss/6-HCA.jpg";

     $scope.cayennePepperSupplement = "Cayenne pepper";
     $scope.cayennePepperDescription = "The research in support of cayenne pepper for weight loss is on fire: Taking half a teaspoon in a capsule can help you eat fewer calories later in the day and crave sweet and salty snacks less, according to a study from Purdue University. " +
         "Meanwhile, UCLA researchers have found that eating meals with capsaicin—the root of pepper’s heat—helps increase your metabolism by 15 to 20% for up to two hours after. " +
         "Plus, research presented at the Biophysical Society Annual Meeting earlier this year found that capsinoids can help activate white and brown fat cells, helping to better regulate your metabolism." +
         " The secret is in the fact that capsaicin activates your sympathetic nervous system, which is what controls your adrenaline and fight or flight response, explains Jalali (also why you feel warmer when you eat the heat).";

     $scope.cayennePepperImage = "./images/weight-loss/7-cayenne_peper.jpg";

     $scope.vitaminDSupplement = "Vitamin D";
     $scope.vitaminDDescription = "The sunshine vitamin does more than just ward off depression—Italian research earlier this year found that a vitamin D deficiency is associated with a higher risk of obesity. And, since some 40% of American adults are deficient in the stuff, according to the Centers for Disease Control and Prevention, " +
         "it may benefit your midsection to supplement, particularly during winter. Vitamin D is necessary for the proper function of receptors all over your body, including ones that tell your systems whether to store or burn fat, w" +
         "hether you’re hungry, and what you’re craving. In fact, a 2009 study from the University of Minnesota found that those who start a diet with healthy levels of vitamin D actually " +
         "lose more weight than those who try and change their eating habits with an empty D bank.";

     $scope.vitaminDImage = "./images/weight-loss/8-vitamin-d.jpg";

     $scope.oliveLeafSupplement = "Olive Leaf";
     $scope.oliveLeafDescription = "Just like antioxidant superstar olive oil, extract from the plants leaves is chock full of polyphenols and flavonoids that help lower inflammation and stabilize blood sugar, Jalali explains. " +
         "Besides protecting the body from harmful free radicals, studies have shown that olive leaf extract supports fat loss by improving how efficiently insulin works in your body, " +
         "thereby reducing the amount of fat your body stores. Research in the American Journal of Nutrition found the supplements helped rats lose weight, while another study out of Isreal found that the extract can help normalize glucose levels, " +
         "causing less cravings and better blood sugar balance.";

     $scope.oliveLeafImage = "./images/weight-loss/9-olive_leaf.jpg";

     $scope.chromiumSupplement = "Chromium";
     $scope.chromiumDescription = "This trace mineral is essential for our body to be able to metabolize macronutrients properly. “Chromium helps insulin metabolize fat, turn protein into muscle, and convert sugar into energy," +
         " plus it plays a key role in regulating appetite, reducing sugar cravings, and increasing lean body mass,” says Jalali. Not only is the element necessary for weight control, but you lose most of your stores during vigorous exercise, " +
         "so it’s extra important for active guys to replenish, Jalali adds.";

     $scope.chromiumImage = "./images/weight-loss/10-chromium.jpg";

}]);

app.controller("EnergyCtrl", ["$scope", function ($scope) {

    $scope.caffeineSupplement = "Caffeine";
    $scope.caffeineDescription = "It is the world's most widely consumed psychoactive drug. Unlike many other psychoactive substances, it is legal and unregulated in nearly all parts of the world. " +
        "There are several known mechanisms of action to explain the effects of caffeine. " +
        "The most prominent is that it reversibly blocks the action of adenosine on its receptor and consequently prevents the onset of drowsiness induced by adenosine. " +
        "Caffeine also stimulates certain portions of the autonomic nervous system.";

    $scope.caffeineImage = "./images/energy/1-caffeine.jpg";

    $scope.taurineSupplement = "Taurine";
    $scope.taurineDescription = "Taurine may sound pretty familiar to you…Taking its name from the latin word for “bull” (taurus), this organic compound is typically found in energy drinks. " +
        "A tonne of research has been undertaken to examine its benefit in the laboratory on cultures of cells, in animals and finally in humans! " +
        "In humans, many of the studies have been through the commercially available drink RedBull, which contains other ingredients, consequently, it’s difficult to look singularly at taurine as a supplement (1). " +
        "However, studies that are currently being undertaken based on the research in rat models (as their genetic responses are similar to our own) to determine the actual effectiveness in humans.";

    $scope.taurineImage = "./images/energy/2-taurine.jpg";

    $scope.vitaminCSupplement = "Vitamin C";
    $scope.vitaminCDescription = "Vitamin C helps to repair and regenerate tissues, protect against heart disease, aid in the absorption of iron, prevent scurvy, and decrease total and LDL (“bad”) cholesterol and triglycerides. " +
        "Research indicates that vitamin C may help protect against a variety of cancers by combating free radicals, and helping neutralize the effects of nitrites " +
        "(preservatives found in some packaged foods that may raise the risk of certain forms of cancer). Supplemental vitamin C may also lessen the duration and symptoms of a common cold, " +
        "help delay or prevent cataracts, and support healthy immune function.";

    $scope.vitaminCImage = "./images/energy/4-vitamin-C.jpg";

    $scope.vitaminESupplement = "Vitamin E";
    $scope.vitaminEDescription = "Benefits of consuming more vitamin E-rich foods can include treating and preventing diseases of the heart and blood vessels, such as chest pains, high blood pressure, and blocked or hardened arteries. " +
        "Vitamin E is found only in plant foods, including certain oils, nuts, grains, fruits and wheat germ. " +
        "It’s also available as a supplement.\n" +
        "\n" +
        "So let’s find out how you can get all these great vitamin E benefits, along with the best vitamin E foods, supplements and the signs of a vitamin E deficiency.";

    $scope.vitaminEImage = "./images/energy/3-vitamin-E.jpg";

}]);

