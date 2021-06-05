const Cheat_PrintColor = Cheat.PrintColor;



Cheat.PrintColor( [ 255, 255, 255, 255 ], "=============================================================================\n");
Cheat.PrintColor( [ 255, 255, 255, 255 ], "[onetap] Welcome use onetap\n");
Cheat.PrintColor( [ 0, 247, 226, 255 ], "Welcome use Multifunctional_Javascript ");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "V");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "4\n");
Cheat.PrintColor( [ 255, 255, 0, 255 ], "[Multifunctional_Javascript V2.5] 2021.2.6 Update logs:\n");
Cheat.PrintColor( [ 255, 255, 0, 255 ], "[Multifunctional_Javascript V2.5]              -Re-add Fast Double tap\n");
Cheat.PrintColor( [ 255, 255, 0, 255 ], "[Multifunctional_Javascript V2.5]              -Separate REAL and FAKE colors\n");
Cheat.PrintColor( [ 255, 255, 0, 255 ], "[Multifunctional_Javascript V2.5]              -Add LBY direction\n");
Cheat.PrintColor( [ 255, 255, 0, 255 ], "[Multifunctional_Javascript V2.5]              -Add player username display\n");
Cheat.PrintColor( [ 255, 255, 0, 255 ], "[Multifunctional_Javascript V2.5]              -Encrypted JavaScript,But this does not mean that V2.5 will be the last version\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3] 2021.3.16 Update logs:\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3]                -open javascript\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3]                -Optimized rainbow\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3]                -Solve the bugs that require Reload all\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3]                -Added weapon judgment display min dmg value\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3]                -Add various indicators\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V3]                -Add a judgment of a certain Chams failure caused by a certain map (only cfg)\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V4] 2021.3.28 Update logs:\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V4]                -Remove the old indicator and remake a new indicator\n");
Cheat.PrintColor( [ 0, 255, 255, 255 ], "[Multifunctional_Javascript V4]                -Remake watermark\n");
Cheat.PrintColor( [ 255, 255, 255, 255 ], "=============================================================================\n");
UI.SetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MAX",13);
UI.SetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MIN",5);





UI.AddLabel("JavaScript combination by Nick Walker")

var wenben = UI.AddLabel("=========Ranbom-Fakelag==========================")
var limit =UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
var jitter =UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
var tlimit =UI.GetValue("Anti-Aim", "Fake-Lag", "Trigger limit");
/* var fake =UI.GetValue("Misc", "JAVASCRIPT", "Script items","LBY offset");
var real =UI.GetValue("Misc", "JAVASCRIPT", "Script items","Real offset");  */
var nlimit =UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
var njitter =UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
var ntlimit =UI.GetValue("Anti-Aim", "Fake-Lag", "Trigger limit");
/* var nfake =UI.GetValue("Misc", "JAVASCRIPT", "Script items","LBY offset");
var nreal =UI.GetValue("Misc", "JAVASCRIPT", "Script items","Real offset"); */
var screen_size = Global.GetScreenSize();
var lasttime = Global.Realtime();
var realtime = Global.Realtime();
var r=255;
var g=255;
var b=255;
var r1=1;
var g1=1;
var b1=1;
var gspeed=0;
var gping=0;



   UI.AddSliderInt("FAKE-LIMIT MIN",0, 17);
    UI.AddSliderInt("FAKE-LIMIT MAX",0, 17);
    UI.AddSliderInt("FAKE-JITTER MIN",0, 100);
    UI.AddSliderInt("FAKE-JITTER MAX",0, 100);
    UI.AddSliderInt("FAKE-TRIGGER MIN",0, 17);
    UI.AddSliderInt("FAKE-TRIGGER MAX",0, 17);
    UI.AddSliderFloat("FAKE-SWITCH delay(s)",0, 3);
    

function SFAKE(){
    var min=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MIN");
    var max=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MAX");
    var nowv=min+Math.floor(Math.random()*(max-min+1))
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit",nowv);
    var min=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-JITTER MIN");
    var max=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-JITTER MAX");
    var nowv=min+Math.floor(Math.random()*(max-min+1))
    UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter",nowv);
    var min=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-TRIGGER MIN");
    var max=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-TRIGGER MAX");
    var nowv=min+Math.floor(Math.random()*(max-min+1))
    UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit",nowv);
}
function check(){
    var min=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MIN");
    var max=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MAX");
    if (min>max){
        UI.SetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MIN",max);
    }
    var min=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-JITTER MIN");
    var max=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-JITTER MAX");
    if (min>max){
        UI.SetValue("Misc", "JAVASCRIPT", "Script items","FAKE-JITTER MIN",max);
    }
    var min=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-TRIGGER MIN");
    var max=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-TRIGGER MAX");
    if (min>max){
        UI.SetValue("Misc", "JAVASCRIPT", "Script items","FAKE-TRIGGER MIN",max);  
    }
}
function main(){
 /*
 这里开始利用一下显示值了
*/ 
    var knifes = ("knife", "bayonet", "flip knife", "gut knife", "karambit");
	var rifle = ("galil ar", "ak 47", "sg553", "m4a4", "m4a1 s", "aug");
	var pistol = ("glock 18", "dual berettas", "p250", "tec 9", "usp s", "five seven");
	var heavypistol_r8 = "r8 revolver";
	var heavypistol = "desert eagle";
	var scout = "ssg 08";
	var awp = "awp";
	var auto = "scar 20";
	var autot = "g3sg1";
	var me = Entity.GetLocalPlayer();
    var weapon = Entity.GetWeapon(me);
    var weapon_name = Entity.GetName(weapon);
	var Woldname = World.GetMapName();
	check();
    username = Cheat.GetUsername()
	limit =UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
    jitter =UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
    tlimit =UI.GetValue("Anti-Aim", "Fake-Lag", "Trigger limit");
	automindmg =UI.GetValue("Rage", "Autosniper", "Targeting", "Minimum damage");
	genmindmg =UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage");
	pistolmindmg =UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
    heavypistolmindmg =UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
	scoutmindmg =UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
	awpmindmg =UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");

	heavypistolhc =UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance");
	scouthc =UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
	awphc =UI.GetValue("Rage", "AWP", "Accuracy", "Hitchance");
	autohc = UI.GetValue("Rage", "Autosniper", "Accuracy", "Hitchance");
    screen_size = Global.GetScreenSize();
	
	
	
	if(weapon_name == heavypistol){
	Render.String( 10, screen_size[1]-600, 0, "DMG:" +String(heavypistolmindmg), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.String( 10, screen_size[1]-600-50, 0, "HC: " +String(heavypistolhc) + "%", [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600-50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	}
	if(weapon_name == heavypistol_r8){
	Render.String( 10, screen_size[1]-600, 0, "DMG:" +String(heavypistolmindmg), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.String( 10, screen_size[1]-600-50, 0, "HC: " +String(heavypistolhc) + "%", [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600-50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	}
	if(weapon_name == scout){
	Render.String( 10, screen_size[1]-600, 0, "DMG:" +String(scoutmindmg), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.String( 10, screen_size[1]-600-50, 0, "HC: " +String(scouthc) + "%", [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600-50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	}
	if(weapon_name == awp){
	Render.String( 10, screen_size[1]-600, 0, "DMG:" +String(awpmindmg), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.String( 10, screen_size[1]-600-50, 0, "HC: " +String(awphc) + "%", [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600-50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	}
	if(weapon_name == auto){
	Render.String( 10, screen_size[1]-600, 0, "DMG:" +String(automindmg), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.String( 10, screen_size[1]-600-50, 0, "HC: " +String(autohc) + "%", [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600-50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	}
	if(weapon_name == autot){
	Render.String( 10, screen_size[1]-600, 0, "DMG:" +String(automindmg), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.String( 10, screen_size[1]-600-50, 0, "HC: " +String(autohc) + "%", [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600-50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	}
	var dt = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
	var onshot = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
	var resolver = UI.IsHotkeyActive("Rage", "General", "Resolver override");
	var fd = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
	var fl = UI.GetValue ("Anti-Aim", "Fake-Lag", "Enabled")
	var safe = UI.IsHotkeyActive("Rage", "General", "Force safe point");
    var maxfl = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
    var hc33322 = UI.IsHotkeyActive ("Misc", "JAVASCRIPT", "Script items", "Hitchance override key");
	var dmg33322 = UI.IsHotkeyActive ("Misc", "JAVASCRIPT", "Script items", "Override min dmg");
  
	
	if(resolver){
		var resolverif = "False";
	}else{
		var resolverif = "True";
	}
	
	if(dt){
		if(onshot){
		var dtif = "HIDE SHOTS";
		}else{
		var dtif = "True"	;
		}	
	}else{
		if(onshot){
		var dtif = "HIDE SHOTS";
		}else{
		var dtif = "False";
		}		
	}
	
	if(dmg33322){
	   var ooll = "OVERRIDE";
	}else{
	   var ooll = "default";
	}
	
	
	if(safe){
		var safeif = "True";
	}else{
		var safeif = "False";
	}
	
	 if(hc33322){
		var oli = "OVERRIDE";
	}else{
		var oli = "default";
	}

	//====================fakelag==============================
	if(maxfl == 0)
	{  var flx = 0
	}
	if(maxfl == 1)
	{  var flx = 30
	}
	if(maxfl == 2)
	{  var flx = 50
	}
	if(maxfl == 3)
	{  var flx = 80
	}
	if(maxfl == 4)
	{  var flx = 100
	}
	if(maxfl == 5)
	{  var flx = 110
	}
	if(maxfl == 6)
	{  var flx = 140
	}
	if(maxfl == 7)
	{  var flx = 165
	}
	if(maxfl == 8)
	{  var flx = 180
	}
	if(maxfl == 9)
	{  var flx = 200
	}
	if(maxfl == 10)
	{  var flx = 235
	}
	if(maxfl == 11)
	{  var flx = 250
	}
	if(maxfl == 12)
	{  var flx = 260
	}
	if(maxfl == 13)
	{  var flx = 275
	}
	if(maxfl == 14)
	{  var flx = 300
	}
	if(maxfl == 15)
	{  var flx = 300
	}
	if(maxfl == 16)
	{  var flx = 300
	}
	if(maxfl == 17)
	{  var flx = 300
	}
	
	
	//====================fakelag==============================
	
	
	
	Render.String( 10, screen_size[1]-600+50, 0, "Resolver: " + resolverif, [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600+50 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	
	Render.String( 10, screen_size[1]-600+100, 0, "Double tap: " + (realtime), [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600+100 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	
	Render.String( 10, screen_size[1]-600+150, 0, "Safe point: " + safeif, [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600+150 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
    
	Render.String( 10, screen_size[1]-600+200, 0, "Fake-lag " + limit, [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600+200 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	Render.GradientRect( 0, screen_size[1]-600+240 , flx, 2, 1, [ 255, 255, 255, 100 ], [ 0, 255, 255, 200 ]);

    Render.String( 10, screen_size[1]-600+250, 0, "HC -->" + oli, [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600+250 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	
	Render.String( 10, screen_size[1]-600+300, 0, "DMG -->" + ooll, [150, 255, 255, 255 ],4);
	Render.GradientRect( 0, screen_size[1]-600+300 , 220, 40, 1, [ 255, 255, 255, 140 ], [ 255, 255, 255, 0 ]);
	    /*
		这里换回了水印 不想被骂 :)
		*/
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-SWITCH delay(s)");
    r=r-1*r1;
    g=g-2*g1;
    b=b-3*b1;

	if(r==1){r1=-r1;}
    if(g==1){g1=-g1;}
    if(b==1){b1=-b1;}
    if(r==255){r1=-r1;}
    if(g==255){g1=-g1;}
    if(b==255){b1=-b1;}
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){
        SFAKE();
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}
    
function flmax(){
	var fakelag = UI.GetValue("Misc", "JAVASCRIPT", "Script items","FAKE-LIMIT MAX")
	
	Exploit.OverrideMaxProcessTicks(fakelag)
}

Cheat.RegisterCallback("CreateMove", "flmax")
Global.RegisterCallback("Draw", "main");

var wenben = UI.AddLabel("=========Watermark=====================")
UI.AddColorPicker("Watermark");
var color1 = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

if (color1 [3] == 0)
	UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [89, 119, 239, 255]);

function draw() {
    var Woldname = World.GetMapName();
	var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
	var seconds1 = today.getSeconds();
	var server11 = World.GetServerString();
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
	var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
	
	var server_tickrate = Globals.Tickrate().toString()
	var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

	color1 = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

	var font = Render.AddFont("Verdana", 7, 400);
var text = " onetap.su [alpha] | " + "xXYu3_zH3nGL1ngXx" + " | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + "ip : "+ server11 + " | " +"map: " + Woldname + " | "+ hours + minutes + seconds  + "   ";
	
	var w = Render.TextSizeCustom(text, font)[0] + 8;
	var x = Global.GetScreenSize()[0];

	x = x - w - 10;

	Render.FilledRect(x, 10, w, 2, [ color1 [0], color1 [1], color1 [2], 0 ]);
	Render.GradientRect( x, 15 , w, 25, 1, [ 0, 190, 255, 255 ], [ 0, 90, 255, 50 ]);
	Render.GradientRect( x, 12 , w, 3, 1, [ 255, 255, 255, 255 ], [ 255, 255, 255, 50 ]);
	Render.GradientRect( x, 12*3+5-1+1-1 , w, 3, 1, [ 255, 255, 255, 255 ], [ 255, 255, 255, 50 ]);
	Render.StringCustom(x+4, 17 + 4, 0, text, [ 255, 255, 255, 255 ], font);
	
	
}

Cheat.RegisterCallback("Draw", "draw");
var wenben = UI.AddLabel("=========Anti-aim=========")
var real_types = ["Fake", "Opposing fake", "Middle", "Smart Middle", "Follow Fake", "Opposing Follow Fake", "Smart", "Opposite Smart"]
var lby_types = ["Opposite", "Middle", "Switch Opposite", "Smart", "Opposite Smart"] // not much you can do with lby but opposite is best
var real_additional_types = ["None", "Full Sine", "Full Jitter", "Half Sine", "Half Jitter"]
var moving_real_types = ["None", "Switch", "Jitter", "Sine"]
var override = UI.AddCheckbox("Override Anti-Aim")
var ui = {
    real_type : UI.AddDropdown("Real type", real_types),
    lby_type : UI.AddDropdown("LBY type", lby_types),
    real_additional_type : UI.AddDropdown("Real additional type", real_additional_types),
    moving_real_type : UI.AddDropdown("Moving real type", moving_real_types),
    smart_range : UI.AddSliderInt("Smart Range", 0, 100)
}
function LBY_opposite(inverter) // inverter is just side basically
{
    var real = Local.GetRealYaw()
    var fake = Local.GetFakeYaw()
    var local = Entity.GetLocalPlayer()
    var yaw = Entity.GetProp(local, "CCSPlayer", "m_angEyeAngles[0]")[1]
    var delta = yaw - fake
    if(delta > 180)
        delta -= 360
    if(delta < -180)
        delta += 360

    if(delta > -20 && inverter)
    {
        AntiAim.SetLBYOffset(90)
        return 90
    }
    else if (delta < 20 && !inverter)
    {
        AntiAim.SetLBYOffset(-90)
        return -90
    }
    else {
        AntiAim.SetLBYOffset(180)
        return 180
    }
}
function smart_middle(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    AntiAim.SetRealOffset(len < 30 ? 0 : (inverter ? 58 : -58))
    return len < 30 ? 0 : (inverter ? 58 : -58)
}
function follow_fake(inverter, a)
{
    var real = Local.GetRealYaw()
    var fake = Local.GetFakeYaw()
    var local = Entity.GetLocalPlayer()
    var yaw = Entity.GetProp(local, "CCSPlayer", "m_angEyeAngles[0]")[1]
    var delta = yaw - fake
    if(delta > 180)
        delta -= 360
    if(delta < -180)
        delta += 360
    AntiAim.SetRealOffset(a ? delta : -delta)
    return a ? delta : -delta
}
function half_sine(inverter, real_yaw)
{
    var sine = ((Math.sin(Globals.Curtime() * 5) + 1) / 2) * 58
    var new_yaw = inverter ? real_yaw + sine : real_yaw - sine
    AntiAim.SetRealOffset(-new_yaw)
}
function half_jitter(inverter, real_yaw)
{
    var rand = Math.random() * 58
    var new_yaw = inverter ? real_yaw + rand : real_yaw - rand
    AntiAim.SetRealOffset(-new_yaw)
}
var flip = false
function switch_opposite(inverter)
{
    var fake = LBY_opposite(flip ? !inverter : inverter)
    if(fake == 180)
    {
        flip = !flip
    }
}
var flip2 = false
var last = 0
function switch_real_moving(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if(len < 30)
        return
    var sim = Globals.Curtime() - Entity.GetProp(local, "CBaseEntity", "m_flSimulationTime")
    if(last > sim)
    {
        flip2 = !flip2
    }
    AntiAim.SetRealOffset(flip2 ? 58 : -58)
    last = sim
}
function jitter_real_moving(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if(len < 30)
        return

    var new_yaw = Math.random() * 58 * 2 - 58
    AntiAim.SetRealOffset(new_yaw)
}
function sine_real_moving(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if(len < 30)
        return
    var factor = 0
    if(len < 90)
        factor = 40
    else
        factor = 30
    var sine = Math.sin(Globals.Curtime() * 5) * factor
    AntiAim.SetRealOffset(sine)
}
function RadToDeg(a){
    return a * 180 / Math.PI
}
function calc_angle(source, entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RadToDeg(Math.atan(delta[2] / Math.hypot(delta[0], delta[1])))
    angles[1] = RadToDeg(Math.atan(delta[1] / delta[0]))
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180
    while(angles[1] > 180)
        angles[1] -= 360
    while(angles[1] < -180)
        angles[1] += 360
    return angles
}
function closest_to_fov()
{
    var local = Entity.GetLocalPlayer()
    var eye = Entity.GetEyePosition(local)
    var ang = Local.GetViewAngles()
    var enemies = Entity.GetEnemies()
    var closest = -1
    var last = 180
    for(i in enemies)
    {
        if(!Entity.IsAlive(enemies[i]))
            continue
        var ang_to = calc_angle(eye, Entity.GetHitboxPosition(enemies[i], 5))
        ang_to[0] -= ang[0]
        ang_to[1] -= ang[1]
        var len = Math.sqrt(ang_to[0]*ang_to[0]+ang_to[1]*ang_to[1])
        if(len < last)
        {
            last = len
            closest = enemies[i]
        }
    }
    return closest
}
function ang_vec(a){
    var sy = Math.sin(a[1])
    var cy = Math.cos(a[1])
    var sp = Math.sin(a[0])
    var cp = Math.cos(a[0])
    return [cp*cy,cp*sy,-sp]
}
function vmf(a,b){
    return [a[0]*b,a[1]*b,a[2]*b]
}
function va(a,b){
    return [a[0]+b[0],a[1]+b[1],a[2]+b[2]]
}
var smart = false
function smart_yaw(side)
{
    var local = Entity.GetLocalPlayer()

    var ent = closest_to_fov()
    if(ent == -1)
        return
    var eye = Entity.GetEyePosition(local)
    var ang = calc_angle(eye, Entity.GetHitboxPosition(ent, 5))
    var left_ang = [0,(ang[1]+90)/180*Math.PI,0] // fucking stupid, had a bug with it and SOMEHOW this fixed it (1000 iq coder)
    var right_ang = [0,(ang[1]-90)/180*Math.PI,0] // fucking stupid, had a bug with it and SOMEHOW this fixed it (1000 iq coder)
    var normalize = function(vec)
    {
        if(vec[1] > 180)
            vec[1] -= 360
        if(vec[1] < -180)
            vec[1] += 360
        return vec
    }
    left_ang = normalize(left_ang)
    right_ang = normalize(right_ang)
    var range = UI.GetValue.apply(null, ui.smart_range)
    var left = vmf(ang_vec(left_ang), range)
    var right = vmf(ang_vec(right_ang), range)
    var temp_left = va(left, eye)
    var temp_right = va(right, eye)
    var tr_left = Trace.Line(local, eye, temp_left)
    var tr_right = Trace.Line(local, eye, temp_right)

    left = vmf(ang_vec(left_ang), range * tr_left[1])
    temp_left = va(left, eye)
    right = vmf(ang_vec(right_ang), range * tr_right[1])
    temp_right = va(right, eye)
    tr_left = Trace.Line(local, temp_left, Entity.GetHitboxPosition(ent, 5))
    tr_right = Trace.Line(local, temp_right, Entity.GetHitboxPosition(ent, 5))
    if(tr_left[0] && !tr_right[0])
        return true
    if(!tr_left[0] && tr_right[0])
        return false
    if(!tr_left[0] && !tr_right[0])
        return side
}
function autodirection()
{
    var local = Entity.GetLocalPlayer()

    var ent = closest_to_fov()
    if(ent == -1)
        return
    var eye = Entity.GetEyePosition(local)
    var ang = calc_angle(eye, Entity.GetHitboxPosition(ent, 5))
    var left_ang = [0,(ang[1]+90)/180*Math.PI,0] // fucking stupid, had a bug with it and SOMEHOW this fixed it (1000 iq coder)
    var right_ang = [0,(ang[1]-90)/180*Math.PI,0] // fucking stupid, had a bug with it and SOMEHOW this fixed it (1000 iq coder)
    var normalize = function(vec)
    {
        if(vec[1] > 180)
            vec[1] -= 360
        if(vec[1] < -180)
            vec[1] += 360
        return vec
    }
    left_ang = normalize(left_ang)
    right_ang = normalize(right_ang)
    var range = 50
    var left = vmf(ang_vec(left_ang), range)
    var right = vmf(ang_vec(right_ang), range)
    var temp_left = va(left, eye)
    var temp_right = va(right, eye)
    var tr_left = Trace.Line(local, eye, temp_left)
    var tr_right = Trace.Line(local, eye, temp_right)

    left = vmf(ang_vec(left_ang), range * tr_left[1])
    temp_left = va(left, eye)
    right = vmf(ang_vec(right_ang), range * tr_right[1])
    temp_right = va(right, eye)
    tr_left = Trace.Line(local, temp_left, Entity.GetHitboxPosition(ent, 5))
    tr_right = Trace.Line(local, temp_right, Entity.GetHitboxPosition(ent, 5))
    if(tr_left[0] && !tr_right[0])
        return 90
    if(!tr_left[0] && tr_right[0])
        return -90
    if(!tr_left[0] && !tr_right[0])
        return 0
}
function smart_lby(inverter, flipped)
{
    LBY_opposite(flipped ? smart_yaw(inverter) : !smart_yaw(inverter))
}
var enemy_brute_stage = []
function reset()
{
    enemy_brute_stage = []
}
var shots_fired = []
var last_shots_fired = []
var bullet_pos = []
var hurt = -1
var shooting = -1
function weapon_fire()
{
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        return
    if(!shots_fired[Entity.GetEntityFromUserID(Event.GetInt("userid"))])
        shots_fired[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = 0
    shots_fired[Entity.GetEntityFromUserID(Event.GetInt("userid"))]++
    shooting = Entity.GetEntityFromUserID(Event.GetInt("userid"))
}
function player_hurt()
{
    if(Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer())
        return
    hurt = Entity.GetEntityFromUserID(Event.GetInt("attacker"))
}
function bullet_impact()
{
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        return
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == shooting)
        bullet_pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
}
function process_shot()
{
    if(shooting == -1)
        return
    var eye = Entity.GetEyePosition(shooting)
    var impact = bullet_pos
    var local = Entity.GetLocalPlayer()
    var head = Entity.GetHitboxPosition(local, 0)
    var ang_to_impact = calc_angle(eye, impact)
    var ang_to_local = calc_angle(eye, head)
    var delta = [ang_to_local[0]-ang_to_impact[0],ang_to_local[1]-ang_to_impact[1], 0]
    var len = Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1])
    delta = [head[0]-eye[0],head[1]-eye[1],head[2]-eye[2]]
    var dist = Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1]+delta[2]*delta[2])
    if(dist > 500)
        dist = 500
    dist = 500 - dist
    dist /= 450
    dist *= 20
    if(dist < 2)
        dist = 2
    if(hurt != shooting && len < dist)
    {
  
        if(!enemy_brute_stage[shooting])
            enemy_brute_stage[shooting] = 0
        enemy_brute_stage[shooting] = (enemy_brute_stage[shooting] + 1) % 3
    }
    shooting = -1
    hurt = -1
    bullet_pos = []
}
var brutee = UI.AddCheckbox("Anti-Brute")
UI.AddLabel("- Overrides Anti-Aim settings")
var autodir = UI.AddCheckbox("Autodirection")
function onCreateMove()
{
    if(UI.GetValue.apply(null, autodir))
    {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", autodirection())
    }
    if(!UI.GetValue.apply(null, override))
    {
        AntiAim.SetOverride(0)
        return
    }
    AntiAim.SetOverride(1)
    var real_type = UI.GetValue.apply(null, ui.real_type)
    var lby_type = UI.GetValue.apply(null, ui.lby_type)
    var real_additional_type = UI.GetValue.apply(null, ui.real_additional_type)
    var moving_real_type = UI.GetValue.apply(null,ui.moving_real_type)
    var inverter = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
    var antibrute = UI.GetValue.apply(null,brutee)
    if(antibrute)
    {
        smart_lby(inverter, false)
        process_shot()
        var enemies = Entity.GetEnemies()
        var enemy_shooting = -1
        for(i in enemies)
        {
            if(!Entity.IsAlive(enemies[i]) || Entity.IsDormant(enemies[i]))
                continue
            var time = Entity.GetProp(enemies[i], "CCSPlayer", "m_nTickBase") * Globals.TickInterval()
            var next_primary_attack = Entity.GetProp(Entity.GetWeapon(enemies[i]), "CBaseCombatWeapon", "m_flNextPrimaryAttack")
            var ammo = Entity.GetProp(Entity.GetWeapon(enemies[i]), "CBaseCombatWeapon", "m_iClip1")
            var canshoot = (next_primary_attack <= time && ammo > 0)
            if(canshoot)
            {
                enemy_shooting = enemies[i]
                break
            }
        }
  
        if(enemy_shooting == -1)
            return
        if(!enemy_brute_stage[enemy_shooting])
            enemy_brute_stage[enemy_shooting] = 0
        switch(enemy_brute_stage[enemy_shooting])
        {
            case 0: AntiAim.SetRealOffset(0); break
            case 1: AntiAim.SetRealOffset(58); break
            case 2: AntiAim.SetRealOffset(-58); break
        }
        return
    }
    var real_yaw = 0

    switch(real_type)
    {
        case 0: AntiAim.SetRealOffset(inverter ? 58 : -58); real_yaw = inverter ? 58 : -58; break
        case 1: AntiAim.SetRealOffset(inverter ? -58 : 58); real_yaw = inverter ? -58 : 58; break
        case 2: AntiAim.SetRealOffset(0); break
        case 3: real_yaw = smart_middle(inverter); break
        case 4: real_yaw = follow_fake(inverter, false); break
        case 5: real_yaw = follow_fake(inverter, true); break
        case 6: AntiAim.SetRealOffset(smart_yaw(inverter) ? 58 : -58); break
        case 7: AntiAim.SetRealOffset(smart_yaw(inverter) ? -58 : 58); break
    }
    switch(lby_type)
    {
        case 0: LBY_opposite(inverter); break
        case 1: AntiAim.SetLBYOffset(0); break
        case 2: switch_opposite(inverter); break
        case 3: smart_lby(inverter, false); break
        case 4: smart_lby(inverter, true); break
    }
    switch(real_additional_type)
    {
        case 1: AntiAim.SetRealOffset(Math.sin(Globals.Curtime() * 5) * 58); break
        case 2: AntiAim.SetRealOffset(Math.random() * 58 * 2 - 58); break
        case 3: half_sine(inverter, real_yaw); break
        case 4: half_jitter(inverter, real_yaw); break
    }
    switch(moving_real_type)
    {
        case 1: switch_real_moving(inverter); break
        case 2: jitter_real_moving(inverter); break
        case 3: sine_real_moving(inverter); break
    }
}
Cheat.RegisterCallback("round_start", "reset")
Cheat.RegisterCallback("weapon_fire", "weapon_fire")
Cheat.RegisterCallback("bullet_impact", "bullet_impact")
Cheat.RegisterCallback("player_hurt", "player_hurt")
Cheat.RegisterCallback("CreateMove", "onCreateMove")

var wenben = UI.AddLabel("=========Min Dmg============================")
UI.AddCheckbox("Display indicator")
UI.AddHotkey("Override min dmg")
UI.AddSliderInt("Heavy Pistol Mindmg", 0, 130)
UI.AddSliderInt("Scout Mindmg", 0, 130)
UI.AddSliderInt("AWP Mindmg", 0, 130)
UI.AddSliderInt("Auto Mindmg", 0, 130)
UI.AddHotkey("Override min dmg #2")
UI.AddSliderInt("Heavy Pistol Mindmg #2", 0, 130)
UI.AddSliderInt("Scout Mindmg #2", 0, 130)
UI.AddSliderInt("AWP Mindmg #2", 0, 130)
UI.AddSliderInt("Auto Mindmg #2", 0, 130)
var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
var scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
var awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
function isActive(a)
{
    return UI.IsHotkeyActive("Script items", a)
}
function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Targeting", "Minimum damage", value)
}
var first = true;
function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}
function isAutoSniper(name)
{
    if(name == "scar 20" || name == "g3sg1")
    {
        return true
    }
}
function onCM()
{

    heavy_value = UI.GetValue("Script items", "Heavy Pistol Mindmg")
    scout_value = UI.GetValue("Script items", "Scout Mindmg")
    awp_value = UI.GetValue("Script items", "AWP Mindmg")
    auto_value = UI.GetValue("Script items", "Auto Mindmg")
    heavy_value2 = UI.GetValue("Script items", "Heavy Pistol Mindmg #2")
    scout_value2 = UI.GetValue("Script items", "Scout Mindmg #2")
    awp_value2 = UI.GetValue("Script items", "AWP Mindmg #2")
    auto_value2 = UI.GetValue("Script items", "Auto Mindmg #2")

    if (UI.IsMenuOpen( ) == true)
    {
        if(first)
        {
          setValue("SCOUT", scout_cache)
          setValue("HEAVY PISTOL", heavy_cache)
          setValue("AWP", awp_cache)
          setValue("AUTOSNIPER", auto_cache)
          first = false;
        }
        heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
        scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
        awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
        auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
        return;
    }
    else
    {
      first = true;
    }

    if (isActive("Override min dmg"))
    {
        setValue("SCOUT", scout_value)
        setValue("AWP", awp_value)
        setValue("HEAVY PISTOL", heavy_value)
        setValue("AUTOSNIPER", auto_value)
        return;
    }
    else{
        setValue("SCOUT", scout_cache)
        setValue("HEAVY PISTOL", heavy_cache)
        setValue("AWP", awp_cache)
        setValue("AUTOSNIPER", auto_cache)
      
    }

    if (isActive("Override min dmg #2"))
    {
        setValue("SCOUT", scout_value2)
        setValue("AWP", awp_value2)
        setValue("HEAVY PISTOL", heavy_value2)
        setValue("AUTOSNIPER", auto_value2)
     
    }
    else{
        setValue("SCOUT", scout_cache)
        setValue("HEAVY PISTOL", heavy_cache)
        setValue("AWP", awp_cache)
        setValue("AUTOSNIPER", auto_cache)
        
    }

}
function indicator()
{
    screen = Render.GetScreenSize()
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    x = screen[0]/2
    y = screen[1]/2
    heavy = "DMG>" + UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
    scout = "DMG>" + UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    awp = "DMG>" + UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
    auto = "DMG>" + UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    var str = ""
    if (UI.GetValue("Script items", "Display indicator") && Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
        if (isHeavyPistol(wep))
        {
            str = heavy
        }
        else if(wep == "ssg 08")
        {
            str = scout
        }
        else if(wep == "awp")
        {
            str = awp
        }
        else if (isAutoSniper(wep))
        {
            str = auto
        }
    }
    Render.String(x, y, 0, str+"", [0,255,255,255])
}
Cheat.RegisterCallback("Draw", "indicator")
Cheat.RegisterCallback("CreateMove", "onCM")
var wenben = UI.AddLabel("=========Aspect ratio=================")
var old_percentage = 0;

function on_draw( ) {
    var percentage = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "aspect ratio" );
    
    if ( old_percentage != percentage ) {
        old_percentage = percentage;
            
        var multiplied = 3 * percentage; // note: 3 is the maximum value.
        var value = multiplied / 100;
        
        Convar.SetFloat( "r_aspectratio", value );
    }
}

function initialize( ) {
  UI.AddSliderFloat( "aspect ratio", 0.0, 100.0 );

  Global.RegisterCallback( "Draw", "on_draw" );
}

initialize( );
var wenben = UI.AddLabel("=========Kill effect======================")
/**
 *
 * Title: Healthshot effect on kill
 * Author: april#0001
 * Description: Plugin that apparently every cheat needs!
 *
*/

//region main

// Our rendering data
var alpha = 0;
var size = 0;

//endregion

//region menu

// Creates our time slider
const time = UI.AddSliderFloat("Effect duration", 0, 2);

//endregion

//region functions

/**
 * Clamps a value between two other numbers
 *
 * @param v
 * @param min
 * @param max
 * @returns {number}
 */
function clamp(v, min, max)
{
    return Math.max(Math.min(v, max), min);
}

/**
 * Returns the value of a script menu element
 *
 * @param element
 * @returns {*}
 */
function get(element)
{
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", element);
}

/**
 * Renders the effect
 */
function render_effect()
{
    if (alpha === 0)
        return;

    const inc_alpha = ((1 / get("Effect duration")) * Global.Frametime()) * 255
    const inc_size = ((1 / get("Effect duration")) * Global.Frametime()) * 360

    alpha = clamp(alpha - inc_alpha, 0, 255);
    size = clamp(size - inc_size, 0, 360);

    const x = Global.GetScreenSize()[0], y = Global.GetScreenSize()[1];

    Render.GradientRect(0, 0, x, size, 0, [128, 195, 255, alpha], [128, 195, 255, 0]);
    Render.GradientRect(0, y - size, x, size, 0, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(x - size, 0, size, y, 1, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(0, 0, size, y, 1, [128, 195, 255, alpha], [128, 195, 255, 0]);
}

/**
 * Updates rendering data
 */
function on_death()
{
    const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    const userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    const player = Entity.GetLocalPlayer();

    if (attacker === player && userid != player)
    {
        alpha = 255;
        size = 360;
    }
}

//endregion

//region callbacks

// Callbacks our functions
Global.RegisterCallback("player_death", "on_death");
Global.RegisterCallback("Draw", "render_effect");

//endregion

function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
var oldTick = Global.Tickcount()
var ticksToDelay = 1

function rain(){
var tickcount = Global.Tickcount() * 1.1;
var alpha = 255
var min_alpha = 255
var color = HSVtoRGB(Global.Realtime() * 0.35, 1, 1);

UI.SetColor("Visual", "SELF", "ESP", "Taser range", [color.r, color.g, color.b, 255]);
        UI.SetColor("Visual", "SELF", "ESP", "Knife range", [color.r, color.g, color.b, 255]);
		UI.SetColor("Visual", "ENEMIES", "Chams", "Visible Color", [color.r, color.g, color.b, 255]);
		UI.SetColor("Visual", "ENEMIES", "ESP", "Glow", [color.r, color.g, color.b, 255]);
		UI.SetColor("Visual", "ENEMIES", "Chams", "Hidden Color", [color.r, color.g, color.b, 255]);
		UI.SetColor("Visual", "ENEMIES", "Chams", "History Color", [color.r, color.g, color.b, 255]);
		UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [color.r, color.g, color.b, 255]);
		UI.SetColor("Misc", "PERFORMANCE&INFORMATION", "Information", "Log output", [color.r, color.g, color.b, 255]);
}
Global.RegisterCallback("Draw", "rain");
var wenben = UI.AddLabel("========rainbow=========")
var screen_width = Math.round(Global.GetScreenSize()[0]);
var screen_length = Math.round(Global.GetScreenSize()[1]);
function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function onDrawEvent()
{
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Rainbow Line Speed"), 1, 1);
    //up
    Render.GradientRect(0, 0, screen_width/2, 5, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(screen_width/2, 0, screen_width/2, 5, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
    //left
    Render.GradientRect(0, 0, 5, screen_length, 0, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    //right
    Render.GradientRect(screen_width-5, 0, 5, screen_length, 0, [colors.b, colors.r, colors.g, 255], [colors.g, colors.b, colors.r, 255]);
    //down
    Render.GradientRect(screen_width/2, screen_length-5, screen_width/2, 5, 1, [colors.b, colors.r, colors.g, 255], [colors.g, colors.b, colors.r, 255]);
    Render.GradientRect(0, screen_length-5, screen_width/2, 5, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
}

Global.RegisterCallback("Draw", "onDrawEvent");
UI.AddSliderFloat("Rainbow Line Speed", 0.01, 1.0);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Rainbow Line Speed", 0.1);
var wenben = UI.AddLabel("========Fast DT=============")
//region menu
UI.AddSliderInt("Tolerance", 0, 8);
UI.AddSliderInt("Shift", 1, 14);
//endregion

//region main
function _FrameNetUpdateStart( )
{
    Exploit.OverrideTolerance(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tolerance"));
    Exploit.OverrideShift(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Shift"));
}
//endregion

//region callbacks
Cheat.RegisterCallback("FRAME_NET_UPDATE_START", "_FrameNetUpdateStart");
//endregion
function map(){
var Woldname = World.GetMapName();
		if(Woldname == "de_dust2_night"){
		UI.SetValue( "Visual", "SELF", "Chams", "Weapon type",1 );
		UI.SetColor("Visual", "SELF", "Chams", "Weapon Color", [0, 255 ,255, 255]);
		UI.SetValue( "Visual", "SELF", "Chams", "Weapon transparency",35 );
		UI.SetValue( "Visual", "SELF", "Chams", "Desync type",1 );
		UI.SetColor("Visual", "SELF", "Chams", "Desync Color", [0, 255 ,255, 255]);
		UI.SetValue( "Visual", "SELF", "Chams", "Desync transparency",35 );
		UI.SetValue( "Visual", "SELF", "Chams", "Arms type",1 );
		UI.SetColor("Visual", "SELF", "Chams", "Arms Color", [0, 255 ,255, 255]);
		UI.SetValue( "Visual", "SELF", "Chams", "Arms transparency",35 );
	    }else{
		UI.SetValue( "Visual", "SELF", "Chams", "Weapon type",5 );
		UI.SetColor("Visual", "SELF", "Chams", "Weapon Color", [28, 0, 140, 255]);
		UI.SetColor("Visual", "SELF", "Chams", "Weapon Color (secondary)", [0, 127, 240, 255]);
		UI.SetValue( "Visual", "SELF", "Chams", "Weapon transparency",15 );
		UI.SetValue( "Visual", "SELF", "Chams", "Desync type",5 );
		UI.SetColor("Visual", "SELF", "Chams", "Desync Color", [28, 0, 140, 255]);
		UI.SetColor("Visual", "SELF", "Chams", "Desync Color (secondary)", [0, 127, 240, 255]);
		UI.SetValue( "Visual", "SELF", "Chams", "Desync transparency",15 );
		UI.SetValue( "Visual", "SELF", "Chams", "Arms type",5 );
		UI.SetColor("Visual", "SELF", "Chams", "Arms Color", [28, 0, 140, 255]);
		UI.SetColor("Visual", "SELF", "Chams", "Arms Color (secondary)", [0, 127, 240, 255]);
		UI.SetValue( "Visual", "SELF", "Chams", "Arms transparency",15 );
	    }
	
}


Global.RegisterCallback("Draw", "map");
//===================================================================
//===================================================================
//===================================================================
//===================================================================
//===================================================================
UI.AddLabel("========Other=============")
UI.AddCheckbox ("Revolver off Fakelag");
UI.AddCheckbox ("CRAZY INVERTER (GOD ANTI-AIM)");
UI.AddCheckbox ("Hitchance override");
UI.AddHotkey ("Hitchance override key");
UI.AddDropdown ("Weapon list", ["General", "Pistol", "Heavy pistol", "Scout", "AWP", "Auto"]);
UI.AddSliderInt ("General HC", 0 ,100);
UI.AddSliderInt ("General HC (override)", 0 ,100);
UI.AddSliderInt ("Pistol HC", 0 ,100);
UI.AddSliderInt ("Pistol HC (override)", 0 ,100);
UI.AddSliderInt ("Heavy pistol HC", 0 ,100);
UI.AddSliderInt ("Heavy pistol HC (override)", 0 ,100);
UI.AddSliderInt ("Scout HC", 0 ,100);
UI.AddSliderInt ("Scout HC (override)", 0 ,100);
UI.AddSliderInt ("AWP HC", 0 ,100);
UI.AddSliderInt ("AWP HC (override)", 0 ,100);
UI.AddSliderInt ("Auto HC", 0 ,100);
UI.AddSliderInt ("Auto HC (override)", 0 ,100);


function aAfLp2(){
	UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
}

function ycN2kaB(){
	var OoooP = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Weapon list");
	var qNm8L21 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitchance override");
	if(qNm8L21){
		UI.SetEnabled ("Rage", "GENERRAL", "Accuracy", "Hitchance", 0);
		UI.SetEnabled ("Rage", "PISTOL", "Accuracy", "Hitchance", 0);
		UI.SetEnabled ("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", 0);
		UI.SetEnabled ("Rage", "SCOUT", "Accuracy", "Hitchance", 0);
		UI.SetEnabled ("Rage", "AWP", "Accuracy", "Hitchance", 0);
		UI.SetEnabled ("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Weapon list", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Hitchance override key", 1);
	    if(OoooP == 0){
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 0);
	    }
	    if(OoooP == 1){
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 0);
	    }
	    if(OoooP == 2){
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 0);
	    }
	    if(OoooP == 3){
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 0);
	    }
	    if(OoooP == 4){
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 0);
	    }
	    if(OoooP == 5){
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 1);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 1);
	    }
	}else{
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Hitchance override key", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Weapon list", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "General HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC", 0);
		UI.SetEnabled ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)", 0);
		UI.SetEnabled ("Rage", "GENERRAL", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "PISTOL", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "SCOUT", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "AWP", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", 1);
	}
	
}

function HC3kaN(){
	var lllm1 = UI.IsHotkeyActive ("Misc", "JAVASCRIPT", "Script items", "Hitchance override key");
	var wok = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Hitchance override");
	var ghc = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "General HC");
	var ghc_o = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "General HC (override)");
	var phc = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Pistol HC");
	var phc_o = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Pistol HC (override)");
	var hphc = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC");
	var hphc_o = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Heavy pistol HC (override)");
	var shc = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Scout HC");
	var shc_o = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Scout HC (override)");
	var ahc = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "AWP HC");
	var ahc_o = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "AWP HC (override)");
	var autohc = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Auto HC");
	var autohc_o = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Auto HC (override)");
	
	
	if(wok){
	    if(lllm1){
		UI.SetValue ("Rage", "GENERRAL", "Accuracy", "Hitchance", ghc_o);
		UI.SetValue ("Rage", "PISTOL", "Accuracy", "Hitchance", phc_o);
		UI.SetValue ("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", hphc_o);
		UI.SetValue ("Rage", "SCOUT", "Accuracy", "Hitchance", shc_o);
		UI.SetValue ("Rage", "AWP", "Accuracy", "Hitchance", ahc_o);
		UI.SetValue ("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", autohc_o);
	    }else{
		UI.SetValue ("Rage", "GENERRAL", "Accuracy", "Hitchance", ghc);
		UI.SetValue ("Rage", "PISTOL", "Accuracy", "Hitchance", phc);
		UI.SetValue ("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", hphc);
		UI.SetValue ("Rage", "SCOUT", "Accuracy", "Hitchance", shc);
		UI.SetValue ("Rage", "AWP", "Accuracy", "Hitchance", ahc);
		UI.SetValue ("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", autohc);
	    }
	}else{
		
	}
}

function AlpHaj(){
	UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items", "Slide walk");
}

function Ex13kO9(){
	var wl2N9bA2 = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Revolver off Fakelag");
	var pO2vZ = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "CRAZY INVERTER (GOD ANTI-AIM)");
	var mNar3 = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Slide walk");
	var pL1nn3fjx = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Crazy slide walk");
	var me = Entity.GetLocalPlayer();
    var weapon = Entity.GetWeapon(me);
	var heavypistol_r8 = "r8 revolver";
    var weapon_name = Entity.GetName(weapon);
	var hc33322 = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Hitchance override key");

	
	if(wl2N9bA2){
	   if(weapon_name == heavypistol_r8){
		   UI.SetValue ("Anti-Aim", "Fake-Lag", "Enabled", false);
	   }else{
		   UI.SetValue ("Anti-Aim", "Fake-Lag", "Enabled", true);
	   }
	}else{
		UI.SetValue ("Anti-Aim", "Fake-Lag", "Enabled", true);
	}
	
	if(pO2vZ){
		aAfLp2();
		UI.SetValue ("Anti-Aim", "Fake angles", "LBY mode", 1);
		UI.SetValue ("Anti-Aim", "Fake angles", "Fake desync", 0);
	}

   
	
	
	
}

function Cn1m (){
	UI.SetEnabled ("Rage", "GENERRAL", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "PISTOL", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "SCOUT", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "AWP", "Accuracy", "Hitchance", 1);
		UI.SetEnabled ("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", 1);
}

Global.RegisterCallback("Draw", "HC3kaN");
Global.RegisterCallback("Unload", "Cn1m");
Global.RegisterCallback("Draw", "ycN2kaB");
Global.RegisterCallback("Draw", "Ex13kO9");

//////////////////////////////////////////
UI.AddLabel("========SKEET UI=========")
var globals = {}
globals.x = "X"
globals.y = "Y"
globals.tab = 1
globals.alpha = 255
globals.active = false
globals.wasactive = false
globals.draw_texture = false
globals.lasttab = 1
UI.AddSliderInt(globals.x,-630,Render.GetScreenSize()[0])
    UI.AddSliderInt(globals.y, -600, Render.GetScreenSize()[1])

var clamp = function (val, min, max) {
    if (val > max)
        return max
    if (val < min)
        return min
    return val
}
globals.X = function () {
    return UI.GetValue("Script Items",globals.x)
}
globals.Y = function () {
    return UI.GetValue("Script Items", globals.y)
}

function drawBasic() {
    var grey = [38, 38, 38, globals.alpha]
    var border = [0, 0, 0, globals.alpha]
	var username = Cheat.GetUsername();
    var fade_factor = ((1 / .15) * Globals.Frametime()) * 255
    if (!UI.IsMenuOpen() && globals.alpha != 0)
        globals.alpha = clamp(globals.alpha - fade_factor, 0, 255)
    if (UI.IsMenuOpen() && globals.alpha != 255)
        globals.alpha = clamp(globals.alpha + fade_factor, 0, 255)
    var gradient = [[59, 175, 222, globals.alpha], [202, 70, 205, globals.alpha]]
    var gradient2 = [[202, 70, 205, globals.alpha], [201, 227, 58, globals.alpha]]
    if (globals.alpha != 0) {
        Render.Rect(globals.X(), globals.Y(), 630, 600, border);
        
        Render.FilledRect(globals.X() + 1, globals.Y() + 1, 628, 5, grey)
        Render.FilledRect(globals.X() + 1, globals.Y() + 1, 5, 598, grey)

        Render.FilledRect(globals.X() + 624, globals.Y() + 1, 5, 598, grey)
        Render.FilledRect(globals.X() + 1, globals.Y() + 594, 628, 5, grey)

        Render.Rect(globals.X() + 6, globals.Y() + 6, 618, 588, border);
        Render.Rect(globals.X() + 1, globals.Y() + 1, 628, 598, [60,60,60,globals.alpha]);
        Render.FilledRect(globals.X() + 7, globals.Y() + 7, 616, 586, [12, 12, 12, globals.alpha])

        Render.String(globals.X() + 20, globals.Y() + 40, 0, "Welcome, " + username , [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 40+20, 0, "Welcome use Multifunctional_Javascript V5", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 40+40, 0, "This's free javascript,so dont be idiot.ok?", [255, 255, 255, 255 ],10);
		
		Render.String(globals.X() + 20, globals.Y() + 100+60, 0, "Watermark", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20+300, globals.Y() + 100+60, 0, "True", [0, 255, 0, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 120+60, 0, "Indicator", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20+300, globals.Y() + 120+60, 0, "True", [0, 255, 0, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 140+60, 0, "Accuracy override", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20+300, globals.Y() + 140+60, 0, "True", [0, 255, 0, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 160+60, 0, "Rainbow", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20+300, globals.Y() + 160+60, 0, "True", [0, 255, 0, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 180+60, 0, "Anti-Aim", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20+300, globals.Y() + 180+60, 0, "*unknown*", [95, 95, 95, 255 ],10);
		Render.String(globals.X() + 20, globals.Y() + 200+60, 0, "New indicator", [255, 255, 255, 255 ],10);
		Render.String(globals.X() + 20+300, globals.Y() + 200+60, 0, "abnormal", [255, 0, 0, 255 ],10);


        Render.GradientRect(globals.X() + 7, globals.Y() + 7, 616 / 2, 2, 1, gradient[0], gradient[1])
        Render.GradientRect(globals.X() + 7 + (616 / 2), globals.Y() + 7, 616 / 2, 2, 1, gradient2[0], gradient2[1])
    }
}

Global.RegisterCallback("Draw", "drawBasic");
UI.AddLabel("========SKEET UI=========")
