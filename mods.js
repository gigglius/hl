zipMods = [
	['halva_en.zip', 'Half-Life EN (MENU LAGS) (214M)', 214283501, 21, 10485760],
	['blue_shift_en.zip', 'Blue Shift EN (221M)', 221191140, 22, 10485760],
	['opposing_force_en.zip', 'Opposing Force EN (BUGGED (old ver) + MENU LAGS) (221M)', 221191140, 22, 10485760],
	['halva_rus.zip', 'Half-Life RUS (304M)', 303881453, 29, 10485760, 10485760],
	['blue_shift_rus.zip', 'Blue Shift RUS (224M)', 223479923, 22, 10485760],
	['opposing_force_rus.zip', 'Opposing Force RUS (BUGGED (old ver)) (224M)', 223479923, 22, 10485760]
];

pkgMods = [
];
var selectZip=document.getElementById('selectZip');
var iArgs=document.getElementById('iArgs');
selectZip.addEventListener('change', function(){
	if(selectZip.value=="halva_en.zip")
	{
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="blue_shift_en.zip" || selectZip.value=="blue_shift_rus.zip")
	{
		// Blue Shift is installed in the bshift directory.
		iArgs.value="-dev 1 -game bshift";
	}
	else if(selectZip.value=="opposing_force_en.zip")
	{
		iArgs.value="-dev 1 -game gearbox";
	}
	else if(selectZip.value=="halva_rus.zip")
	{
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="opposing_force_rus.zip")
	{
		// Opposing Force is installed in the gearbox directory, regardless of language.
		iArgs.value="-dev 1 -game gearbox";
	}
});
