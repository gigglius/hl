zipMods = [
['halva_en.zip', 'Half-Life EN (214M)', 214283501],
['blue_shift_rus.zip', 'Blue Shift EN (221M)', 221191140],
['opposing_force_en.zip', 'Opposing Force EN (221M)', 221191140],
['halva_rus.zip', 'Half-Life RUS (304M)', 303881453],
['blue_shift_rus.zip', 'Blue Shift RUS (223M)', 223479923],
['opposing_force_rus.zip', 'Opposing Force RUS (224M)', 223479923]
];

pkgMods = [
];
var selectZip=document.getElementById('selectZip');
var iArgs=document.getElementById('iArgs');
selectZip.addEventListener('change', function(){
	if(selectZip.value=="halva_en.zip")
	{
		alert('Known issue: menu may lag.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="blue_shift_rus.zip")
	{
		alert('Known issue: armor pickup may require noclip.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="opposing_force_en.zip")
	{
		alert('Known issue: this bundled older engine build may fail to spawn some NPCs.');
		iArgs.value="-dev 1 -game gearbox";
	}
	else if(selectZip.value=="halva_rus.zip")
	{
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="blue_shift_rus.zip")
	{
		alert('Known issue: armor pickup may require noclip.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="opposing_force_rus.zip")
	{
		alert('Known issue: this bundled older engine build may fail to spawn some NPCs.');
		iArgs.value="-dev 1 -game gearbox";
	}
});
