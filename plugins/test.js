///const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language 
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'news', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/Fe0yGRL.jpg";
    r_text[1] = "https://i.imgur.com/smgyikh.jpeg";
    r_text[2] = "https://i.imgur.com/7ylxsF3.jpeg";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━ _വാർത്തകൾ വിരൽത്തുമ്പിൽ_ ━*               

*പ്രഭാത വാർത്തകൾ*


2021 | ഒക്ടോബർ 20 | 1197 |  തുലാം 4 | ബുധൻ | രേവതി 
🌹🦚🦜➖➖➖➖➖➖➖➖
🔳ജനന സര്‍ട്ടിഫിക്കറ്റ് പൗരത്വ രേഖയായി അംഗീകരിക്കാന്‍ ആലോചന. കഴിഞ്ഞ പതിനെട്ടിന് ചേര്‍ന്ന വിവിധ മന്ത്രാലയങ്ങളുടെ യോഗത്തില്‍ പ്രധാനമന്ത്രിയാണ് നിര്‍ദ്ദേശം മുന്‍പോട്ട് വച്ചത്. നിര്‍ദ്ദേശം പ്രായോഗികമാക്കുന്നതിനുള്ള തുടര്‍ നടപടികള്‍ ആലോചിക്കാന്‍ മന്ത്രാലയ സെക്രട്ടറിമാര്‍ക്ക് നിര്‍ദ്ദേശം നല്‍കി. പൗരത്വ നിയമഭേദഗതി പ്രതിഷേധങ്ങളെ തുടര്‍ന്ന്  പൗരത്വ രേഖ ലഭ്യമാക്കുന്നതിന് ലളിതമായ മാര്‍ഗം സ്വീകരിക്കുമെന്ന് പ്രധാനമന്ത്രി നേരത്തെ വ്യക്തമാക്കിയിരുന്നു. ഇക്കാര്യത്തില്‍ ഉടന്‍ പഠിച്ച് റിപ്പോര്‍ട്ട് സമര്‍പ്പിക്കാനാണ് വകുപ്പ് സെക്രട്ടറിമാര്‍ക്ക് നിര്‍ദേശം നല്‍കിയിരിക്കുന്നത്.  

🔳സിംഘു സമരകേന്ദ്രത്തില്‍നിന്ന് കര്‍ഷകരെ നീക്കാന്‍ കേന്ദ്ര കൃഷിമന്ത്രി നരേന്ദ്രസിങ് തോമര്‍ സിഖ് സായുധ വിഭാഗമായ നിഹാങ്ങിന്റെ മേധാവി ബാബ അമന്‍ സിങ്ങുമായി ചര്‍ച്ചനടത്തിയതായി വെളിപ്പെടുത്തല്‍. സിംഘുവില്‍ ദളിത് യുവാവ് കൊല്ലപ്പെട്ടതിനുപിന്നാലെയാണ് നിഹാങ്ങുകളുടെ ഇടപെടലിനെച്ചൊല്ലിയുള്ള പുതിയ വിവാദം പുറത്തുവരുന്നത്. ജൂലായ് അവസാനം കേന്ദ്ര കൃഷിസഹമന്ത്രി കൈലാഷ് ചൗധരിയുടെ ന്യൂഡല്‍ഹിയിലെ വീട്ടിലായിരുന്നു കൂടിക്കാഴ്ച. ബി.ജെ.പി.യുടെ കിസാന്‍ മോര്‍ച്ച നേതാവ് സുഖ്മീന്ദര്‍പാല്‍ സിങ് ഗ്രെവാളും യോഗത്തില്‍ പങ്കെടുത്തു. തോമറും ബാബയും ഒന്നിച്ചുനില്‍ക്കുന്ന ചിത്രങ്ങളും പുറത്തുവന്നു. തനിക്ക് 10 ലക്ഷം രൂപ വാഗ്ദാനം നല്‍കിയതായി ബാബ പറഞ്ഞു. എന്നാല്‍ പണവാഗ്ദാനം നിരസിച്ചുവെന്നും ആവശ്യം അംഗീകരിച്ചാലേ ഉപരോധസ്ഥലത്തുനിന്ന് പിന്‍വാങ്ങൂവെന്ന് വ്യക്തമാക്കിയെന്നും ബാബ പറഞ്ഞു.

🔳കേരളത്തില്‍ വരുന്ന അഞ്ചുദിവസംകൂടി ഇടിമിന്നലോടെ കനത്തമഴയ്ക്ക് സാധ്യതയുണ്ടെന്ന് മുന്നറിയിപ്പ്. ഇന്നും നാളേയും അതിശക്തമായ മഴപെയ്യും. ഇതില്‍ നാളേയായിരിക്കും കൂടുതല്‍ മഴക്ക് സാധ്യത. മലയോരങ്ങളില്‍ തീവ്രമാകാനും ഇടയുണ്ട്. ഒരുസ്ഥലത്ത് ചെറിയ സമയത്തില്‍ വന്‍തോതില്‍ മഴപെയ്യാനുള്ള സാധ്യതയും നിലനില്‍ക്കുന്നുവെന്നാണ്
കാലാവസ്ഥാവകുപ്പിന്റെ മുന്നറിയിപ്പ്. ഇന്ന് തിരുവനന്തപുരം, പത്തനംതിട്ട, കോട്ടയം, എറണാകുളം, ഇടുക്കി, തൃശ്ശൂര്‍, പാലക്കാട്, മലപ്പുറം, കോഴിക്കോട്, വയനാട്, കണ്ണൂര്‍ ജില്ലകളിലും നാളെ തിരുവനന്തപുരം, കൊല്ലം, പത്തനംതിട്ട, കോട്ടയം, ആലപ്പുഴ, എറണാകുളം, ഇടുക്കി, തൃശ്ശൂര്‍, പാലക്കാട്, മലപ്പുറം, കോഴിക്കോട്, വയനാട് ജില്ലകളിലും കേന്ദ്ര കാലാവസ്ഥാ വകുപ്പ്  
ഓറഞ്ച് അലര്‍ട്ട് പ്രഖ്യാപിച്ചു.

🔳അപകടകരമായ രീതിയില്‍ ജലനിരപ്പ് ഉയരുന്ന സാഹചര്യമുണ്ടായാല്‍ ഇടുക്കി അണക്കെട്ടില്‍ നിന്ന് പുറത്തുവിടുന്ന ജലത്തിന്റെ അളവ് നിയന്ത്രിക്കുമെന്ന് വൈദ്യുതിമന്ത്രി കെ.കൃഷ്ണന്‍കുട്ടി. നിലവില്‍ അത്തരമൊരു സാഹചര്യമില്ലെന്നും ആലുവയില്‍ പെരിയാറിലെ ജലനിരപ്പ് പരിശോധിച്ച ശേഷം മന്ത്രി മാധ്യമങ്ങളോട് പറഞ്ഞു.

🔳ഭരണകൂടം നടത്തുന്ന മഴക്കെടുതി ദുരന്ത നിവാരണത്തില്‍ വിമര്‍ശനമുന്നയിച്ച് ചെറിയാന്‍ ഫിലിപ്പ്. ഭരണാധികാരികള്‍ ദുരന്ത നിവാരണത്തില്‍ വേണ്ടത്ര ശ്രദ്ധിക്കാതെ ദുരന്തം വന്ന ശേഷം ക്യാമ്പില്‍ പോയി കണ്ണീര്‍ പൊഴിക്കുന്നത് ജനവഞ്ചനയാണെന്നും അദ്ദേഹം വിമര്‍ശിച്ചു. 2018, 2019 എന്നീ വര്‍ഷങ്ങളിലെ പ്രളയത്തില്‍ നിന്നും ഒട്ടേറെ പാഠങ്ങള്‍ നമ്മള്‍ പഠിച്ചതാണ്. നെതര്‍ലണ്ട് മാതൃകയെക്കുറിച്ച് അവിടെ പോയും പഠിച്ചു. എന്നാല്‍ തുടര്‍ നടപടിയെക്കുറിച്ച് ഇപ്പോഴും ആര്‍ക്കുമറിയില്ലെന്നും ചെറിയാന്‍ ഫിലിപ്പ് കുറ്റപ്പെടുത്തി.

🔳പ്രൊഫഷണല്‍ കോളേജുകള്‍ ഉള്‍പ്പെടെ എല്ലാ വിദ്യാഭ്യാസ സ്ഥാപനങ്ങള്‍ക്കും ശനിയാഴ്ചവരെ അവധി പ്രഖ്യാപിച്ചു. വ്യാഴം, വെള്ളി, ശനി ദിവസങ്ങളില്‍ നടത്താന്‍ നിശ്ചയിച്ചിരുന്ന എല്ലാ പരീക്ഷകളും മാറ്റിവെക്കാനും സര്‍വകലാശാലകള്‍ക്ക് ഉന്നതവിദ്യാഭ്യാസ വകുപ്പ് നിര്‍ദേശം നല്‍കി.

*അമല ബിഎംടി യൂണിറ്റ്*
അമല ഇന്‍സ്റ്റിറ്റിയൂറ്റ് ഓഫ് മെഡിക്കല്‍ സയന്‍സസില്‍ ബോണ്‍മാരോ ട്രാന്‍സ്‌പ്ലേന്റേഷന്‍ യൂണിറ്റിന് തുടക്കമായി. രക്താര്‍ബുദത്തിനും രക്തസംബന്ധമായ രോഗങ്ങള്‍ക്കും ശാശ്വത പരിഹാരം കാണുന്നതിനായി ആരംഭിച്ച ബോണ്‍മാരോ ട്രാന്‍സ്‌പ്ലേന്റേഷന്‍ യൂണിറ്റിന് ഒക്ടോബര്‍ 14-ാം തിയ്യതി അഭിവന്ദ്യ തൃശൂര്‍ അതിരൂപതാ മെത്രാപൊലീത്താ മാര്‍ ആന്‍ഡ്രൂസ് താഴത്ത് ആശിര്‍വാദ കര്‍മ്മം നിര്‍വഹിച്ചു. ഒക്ടോബര്‍ 15-ാം തിയ്യതി ബഹുമാനപ്പെട്ട റവന്യൂ മന്ത്രി അഡ്വ.കെ.രാജന്‍ ബിഎംടി യൂണിറ്റ് സമുച്ചയം ഉദ്ഘാടനം നിര്‍വഹിച്ചു.
➖➖➖➖➖➖➖➖

🔳മഴ മുന്നറിയിപ്പ് പ്രമാണിച്ച് ബുധന്‍ മുതല്‍ വെള്ളി വരെ കൈറ്റ് വിക്ടേഴ്സില്‍  ഫസ്റ്റ് ബെല്‍ റഗുലര്‍ ക്ലാസുകള്‍ ഉണ്ടാകില്ല. പകരം ഈ മൂന്നു ദിവസങ്ങളില്‍ ശനി മുതല്‍ തിങ്കള്‍ വരെയുള്ള ക്ലാസുകളുടെ പുന:സംപ്രേഷണം നടത്തും. ഇതേ ക്ലാസുകള്‍ പിന്നീട്  കൈറ്റ് വിക്ടേഴ്സ് പ്ലസ് ചാനലിലും ഒരു തവണ കൂടി ലഭ്യമാക്കുമെന്ന് കൈറ്റ് സിഇഒ കെ.അന്‍വര്‍ സാദത്ത് അറിയിച്ചു. ക്ലാസ്സുകള്‍ക്കായി ശനിയാഴ്ചയ്ക്ക് ശേഷമുള്ള ടൈം ടേബിള്‍ പിന്നീട് പ്രസിദ്ധീകരിക്കുമെന്നും അന്‍വര്‍ സാദത്ത് വ്യക്തമാക്കി.

🔳രാജ്യത്ത് ഇന്നലെ സ്ഥിരീകരിച്ച 14,933 കോവിഡ് രോഗികളില്‍ 7,643 രോഗികള്‍ കേരളത്തില്‍. ഇന്നലെ രേഖപ്പെടുത്തിയ 199 മരണങ്ങളില്‍  77 മരണങ്ങളാണ് കേരളത്തില്‍ റിപ്പോര്‍ട്ട് ചെയ്തത്. രാജ്യത്തെ 1,71,883 സജീവരോഗികളില്‍ 80,328 രോഗികള്‍ കേരളത്തിലാണുള്ളത്.

🔳ദുരിതാശ്വാസ ക്യാമ്പുകളില്‍ കൊവിഡ് പകരാതിരിക്കാന്‍ പ്രത്യേക ജാഗ്രത വേണമെന്ന് ആരോഗ്യമന്ത്രി വീണാ ജോര്‍ജ്. സംസ്ഥാനം ഇപ്പോഴും കൊവിഡില്‍ നിന്നും പൂര്‍ണമുക്തമല്ല. പല സ്ഥലങ്ങളിലും അതിതീവ്ര വ്യാപന ശേഷിയുള്ള ഡെല്‍റ്റ വൈറസിന്റെ വകഭേദം നിലനില്‍ക്കുകയാണ്. ഈ സാഹചര്യത്തില്‍ ക്യാമ്പുകളിലുള്ളവരും സന്നദ്ധ പ്രവര്‍ത്തകരും ജീവനക്കാരുമെല്ലാം കൊവിഡ് മാര്‍ഗനിര്‍ദേശങ്ങള്‍ കൃത്യമായി പാലിക്കണമെന്നും പുറത്ത് നിന്ന് വരുന്നവര്‍ ക്യാമ്പിലെ അംഗങ്ങളുമായി സമ്പര്‍ക്കം ഒഴിവാക്കണമെന്നും ആരോഗ്യമന്ത്രി നിര്‍ദ്ദേശിച്ചു.

🔳പൂഞ്ഞാറില്‍ വെള്ളക്കെട്ടില്‍ കെഎസ്ആര്‍ടിസി ബസ് ഇറക്കിയ ഡ്രൈവര്‍ ജയദീപിന്റെ ലൈസന്‍സ് സസ്പെന്റ് ചെയ്യാനുള്ള നടപടി മോട്ടോര്‍ വാഹനവകുപ്പ് തുടങ്ങി. ജയദീപ് രണ്ടാഴ്ചയ്ക്കുള്ളില്‍ വിശദീകരണം നല്‍കണം. മോട്ടോര്‍ വാഹന വകുപ്പ് 184 ആം വകുപ്പ് പ്രകാരമാണ് നടപടി. യാത്രക്കാരുടെ ജീവന്‍ അപകടത്തിലാക്കിയതിന് ഇയാളെ നേരത്തെ സസ്പെന്റ് ചെയ്തിരുന്നു. സസ്പെന്‍ഷനെ സമൂഹമാധ്യമങ്ങളിലൂടെ ഇയാള്‍ പരിഹസിച്ച് രംഗത്ത് വന്നിരുന്നു.

🔳കോണ്‍ഗ്രസ് പുനഃസംഘടനയില്‍ മതിയായ പ്രാതിനിധ്യം ഉറപ്പാക്കണമെന്ന ആവശ്യം ശക്തമാക്കി രമേശ് ചെന്നിത്തല കേന്ദ്ര നേതാക്കളെ കണ്ടു. ചൊവാഴ്ച അപ്രതീക്ഷിതമായി ഡല്‍ഹിയിലെത്തിയ രമേശ്, താരിഖ് അന്‍വര്‍ ഉള്‍പ്പെടെയുള്ളവരെ സന്ദര്‍ശിച്ചാണ് സമ്മര്‍ദം ശക്തമാക്കിയത്. കെ.പി.സി.സി. ഭാരവാഹിപ്പട്ടികയ്ക്ക് ഏതാണ്ട് അന്തിമരൂപമായ ഘട്ടത്തിലാണ് ചെന്നിത്തലയുടെ ഡല്‍ഹി യാത്ര.

🔳കോണ്‍ഗ്രസ് സഖ്യത്തോടുള്ള സംസ്ഥാന ഘടകത്തിന്റെ നിലപാട് വ്യക്തമാക്കി മുഖ്യമന്ത്രി പിണറായി വിജയന്‍. കോണ്‍ഗ്രസ് ഒരിക്കലും ബി.ജെ.പിക്ക് ബദല്‍ അല്ലെന്നും നിലവില്‍ കോണ്‍ഗ്രസ് നശിച്ച് നാമാവിശേഷമാകുകയാണെന്നും  ഇത് ഖേദകരമാണെന്നും ചിന്ത വാരികയിലെഴുതിയ ലേഖനത്തില്‍ പിണറായി പറഞ്ഞു. രൂപീകരിക്കപ്പെട്ടപ്പോള്‍ മുതല്‍ മതേതരത്വത്തിന്റെ അശമുള്ള പാര്‍ട്ടിയായിരുന്നെങ്കിലും ഇപ്പോള്‍ അങ്ങനെയല്ലെന്ന സ്ഥിതിയെന്നത് ആശങ്കയുണ്ടാക്കുന്നതാണെന്നും പിണറായി കൂട്ടിച്ചേര്‍ത്തു.

🔳ലോക്ക്ഡൌണ്‍ നിയന്ത്രണങ്ങളെ തുടര്‍ന്നുണ്ടായ കടബാധ്യതയെ തുടര്‍ന്ന് ഹോട്ടല്‍ ഉടമയായ യുവാവ് ആത്മഹത്യ ചെയ്തു. തന്റെ മരണത്തിന് കാരണം സര്‍ക്കാറാണെന്ന് ഫേസ്ബുക്കില്‍ കുറിപ്പ് പങ്കുവച്ച ശേഷമായിരുന്നു കോട്ടയം കുറിച്ചിയിലെ വിനായക ഹോട്ടലുടമ കനകക്കുന്ന് ഗുരുദേവഭവനില്‍ സരിന്‍ മോഹനന്‍(42) തീവണ്ടിക്ക് മുന്നില്‍ ചാടി ആത്മഹത്യചെയ്തത്. ചൊവ്വാഴ്ച പുലര്‍ച്ചെ ട്രെയിനിന് മുന്നില്‍ ചാടിയാണ് സരിന്റെ ആത്മഹത്യ. ഭര്യയും രണ്ട് കുട്ടികളുമുള്ള സരിന്റെ ഒരു കുട്ടി ഓട്ടിസം ബാധിതയാണെന്നും കുറിപ്പില്‍ പറയുന്നു.  അശാസ്ത്രീയ ലോക്ക്ഡൌണ്‍ നിയന്ത്രണങ്ങളില്‍ ഹോട്ടല്‍ തുറക്കാനാവാതെ കടക്കെണിയിലായെന്നാണ് സരിന്‍ കുറിപ്പില്‍ പറയുന്നത്.

🔳പ്രധാനമന്ത്രി നരേന്ദ്ര മോദി നിരക്ഷരനാണെന്ന് പറഞ്ഞ കര്‍ണ്ണാടക കോണ്‍ഗ്രസിന്റെ ഔദ്യോഗിക ട്വീറ്റ് വിവാദങ്ങള്‍ക്കും പ്രതിഷേധങ്ങള്‍ക്കുമൊടുവില്‍ പിന്‍വലിച്ച് കോണ്‍ഗ്രസ് ഖേദം പ്രകടിപ്പിച്ചു.  പുതിയ സോഷ്യല്‍ മീഡിയ മാനേജറാണ് അപരിഷ്‌കൃതമായ ട്വീറ്റ് പങ്കുവച്ചെതെന്ന് കോണ്‍ഗ്രസ് വിശദീകരിച്ചു. വിവാദ പോസ്റ്റിനെ തള്ളി കര്‍ണാടക കോണ്‍ഗ്രസ് അധ്യക്ഷന്‍ ഡികെ ശിവകുമാറും രംഗത്തെത്തി. ട്വീറ്റിലെ പരമാര്‍ശം 'സിവില്‍ പാര്‍ലമെന്ററി ഭാഷാ' നിലവാരത്തിലുള്ളതായിരുന്നില്ല. ഔദ്യോഗിക ട്വിറ്റര്‍ ഹാന്‍ഡില്‍ മുഖേന പുതിയ സോഷ്യല്‍ മീഡിയ മാനേജര്‍ നടത്തിയ അപരിഷ്‌കൃതമായ ട്വീറ്റില്‍ ഖേദിക്കുകയും പിന്‍വലിക്കുകയും ചെയ്തു എന്നും ശിവകുമാര്‍ ട്വീറ്റ് ചെയ്തു.

🔳കോണ്‍ഗ്രസ് നേതാവ് രാഹുല്‍ ഗാന്ധി മയക്കുമരുന്നിന് അടിമയും മയക്കുമരുന്ന് കച്ചവടക്കാരനുമാണെന്ന് കര്‍ണാടക ബിജെപി അധ്യക്ഷന്‍ നളിന്‍ കുമാര്‍ കട്ടീല്‍. പ്രധാനമന്ത്രി നരേന്ദ്ര മോദി നിരക്ഷരനാണെന്ന് പരിഹസിച്ചുള്ള കര്‍ണാടക കോണ്‍ഗ്രസിന്റെ ട്വീറ്റ് ഏറെ വിവാദമായതിന് തൊട്ടുപിന്നാലെയാണ് രാഹുലിനെതിരേ ബിജെപി നേതാവിന്റെ വിവാദ പ്രസ്താവന.

🔳ഉത്തരാഖണ്ഡ് പ്രളയത്തില്‍ മരണം 35 ആയി. മേഘവിസ്ഫോടനത്തെ തുടര്‍ന്ന് നൈനിറ്റാളിലെ റിസോര്‍ട്ടില്‍ കുടുങ്ങിയ 200 പേരെ രക്ഷപ്പെടുത്തി. പ്രധാനമന്ത്രിയും കേന്ദ്ര ആഭ്യന്തരമന്ത്രി അമിത് ഷായും സംസ്ഥാനത്തെ സ്ഥിതിഗതികള്‍ വിലയിരുത്തി. ദുരന്ത നിവാരണ സേനയെ കൂടാതെ കര,വ്യോമസേനകള്‍ കൂടി രക്ഷാപ്രവര്‍ത്തനത്തിനെത്തിയിട്ടുണ്ട്.

🔳ബോളിവുഡ് സൂപ്പര്‍ താരം ഷാരൂഖ് ഖാന്റെ മകന്‍ ആര്യന്‍ഖാന്റെ കേസില്‍ നാര്‍ക്കോട്ടിക് കണ്‍ട്രോള്‍ ബ്യൂറോയ്‌ക്കെതിരെ പരാതിയുമായി ശിവസേന നേതാവ്. ആര്യന്റെ മൗലികാവകാശങ്ങള്‍ പോലും ലംഘിക്കപ്പെടുന്ന സാഹചര്യത്തില്‍ അടിയന്തര ഇടപെടല്‍ ആവശ്യപ്പെട്ട് ശിവസേന നേതാവ് കിഷോര്‍ തിവാരി സുപ്രീം കോടതിയെ സമീപിച്ചു.

🔳നടിയും മോഡലുമായ ഷെര്‍ലിന്‍ ചോപ്രക്കെതിരേ രാജ് കുന്ദ്രയും ശില്‍പ ഷെട്ടിയും 50 കോടി രൂപയുടെ മാനനഷ്ട കേസ് ഫയല്‍ ചെയ്തു. തങ്ങള്‍ക്കെതിരേ ഷെര്‍ലിന്‍ ചോപ്ര ഉന്നയിച്ച പരാതിയും ആരോപണങ്ങളും വ്യാജമാണെന്ന് ചൂണ്ടിക്കാട്ടിയാണ് രാജ് കുന്ദ്രയുടെയും ശില്‍പ ഷെട്ടിയുടെയും അഭിഭാഷകര്‍ കേസ് ഫയല്‍ ചെയ്തത്.

🔳സ്വന്തം രാഷ്ട്രീയ പാര്‍ട്ടി പ്രഖ്യാപനം ഉടനന്നെന്ന് പഞ്ചാബ് മുന്‍ മുഖ്യമന്ത്രി അമരീന്ദര്‍ സിംഗ്. പഞ്ചാബില്‍ ബിജെപിയുമായി സഹകരിക്കാന്‍ അമരീന്ദര്‍ സിംഗ് ഉപാധി വെച്ചു. കര്‍ഷക സമരം കേന്ദ്രം ഒത്തുതീര്‍പ്പാക്കിയാല്‍ സഹകരിക്കുമെന്നാണ് അമരീന്ദര്‍ സിംഗിന്റെ വാഗ്ദാനം. കര്‍ഷകരുടെ ആവശ്യങ്ങള്‍ അംഗീകരിച്ചാല്‍ വരുന്ന നിയമസഭ തെരഞ്ഞെടുപ്പില്‍ ബിജെപിയുമായി സീറ്റ് ധാരണയുണ്ടാകുമെന്നും അമരീന്ദര്‍ സിംഗ് അറിയിച്ചു.

🔳ഉത്തര്‍പ്രദേശില്‍ അടുത്ത വര്‍ഷം നടക്കുന്ന നിയമസഭാ തെരഞ്ഞെടുപ്പില്‍ കോണ്‍ഗ്രസ് നാല്‍പത് ശതമാനം സീറ്റുകള്‍ വനിതകള്‍ക്ക് വേണ്ടി മാറ്റി വയ്ക്കുമെന്ന് ജനറല്‍ സെക്രട്ടറി പ്രിയങ്ക ഗാന്ധി. ഉത്തര്‍പ്രദേശില്‍ മാറ്റം ആഗ്രഹിക്കുന്ന എല്ലാ സ്ത്രീകള്‍ക്കും വേണ്ടിയാണ് തീരുമാനമെന്നും വെറുപ്പിന്റെ രാഷ്ട്രീയം അവസാനിപ്പിക്കാന്‍ ഇതാണ് യഥാര്‍ത്ഥ മാര്‍ഗമെന്നും ലക്നൗവില്‍ നടത്തിയ വാര്‍ത്താസമ്മേളനത്തില്‍ പ്രിയങ്ക ഗാന്ധി വ്യക്തമാക്കി. യുപി തെരഞ്ഞെടുപ്പ് പ്രചാരണത്തില്‍ ഇത്തവണ കോണ്‍ഗ്രസിന്റെ മുഖം പ്രിയങ്ക ഗാന്ധിയായിരിക്കുമെന്ന് മുതിര്‍ന്ന നേതാവ് പി എല്‍ പുനിയ എംപിയും പറഞ്ഞു.

🔳ജമ്മുകശ്മീരില്‍ ഭീകരരുമായുള്ള ഏറ്റുമുട്ടലില്‍ സൈനികര്‍ കൊല്ലപ്പെടുകയും നാട്ടുകാര്‍ മരിക്കുകയും ചെയ്യുമ്പോള്‍ ഇന്ത്യ പാകിസ്താനുമായി ട്വന്റി ട്വന്റി കളിക്കാന്‍ പോവുകയാണോയെന്ന് മജ്‌ലിസ് പാര്‍ട്ടി തലവന്‍ അസദുദ്ദിന്‍ ഒവൈസി. ഇന്റലിജന്‍സ് ബ്യൂറോയും അമിത് ഷായും ഇവിടെ എന്താണ് ചെയ്യുന്നതെന്നും ഇതെല്ലാം കേന്ദ്രത്തിന്റെ പരാജയമാണെന്നും അദ്ദേഹം പറഞ്ഞു.

🔳ആഭ്യന്തരവും അന്തര്‍ദേശീയവുമായ ബുദ്ധമത തീര്‍ത്ഥാടകര്‍ക്ക് ബുദ്ധന്റെ മഹാപരിനിര്‍വ്വാണ സ്ഥലം സന്ദര്‍ശിക്കാന്‍ സഹായകരമാകുന്ന കുശിനഗര്‍ അന്താരാഷ്ട്ര വിമാനത്താവളം ഇന്ന് പ്രധാനമന്ത്രി നരേന്ദ്രമോദി രാഷ്ട്രത്തിന് സമര്‍പ്പിക്കും. ലോകമെമ്പാടുമുള്ള ബുദ്ധമത തീര്‍ത്ഥാടന കേന്ദ്രങ്ങളെ ബന്ധിപ്പിക്കുന്നതിനുള്ള ഒരു ശ്രമത്തിന്റെ ഭാഗമാണ് 260 കോടി രൂപ ചെലവില്‍ നിര്‍മ്മിച്ച കുശിനഗര്‍ അന്താരാഷ്ട്ര വിമാനത്താവളം.

🔳കുട്ടികള്‍ മോശം രീതിയില്‍ പെരുമാറുകയോ കുറ്റകൃത്യങ്ങളില്‍ ഏര്‍പ്പെടുകയോ ചെയ്താല്‍ ശിക്ഷ ലഭിക്കുക മാതാപിതാക്കള്‍ക്ക്. ചൈനീസ് സര്‍ക്കാരാണ് ഇത്തരമൊരു നിയമം പാസാക്കാനൊരുങ്ങുന്നത്. കുട്ടികള്‍ മോശമായി പെരുമാറുന്നതിന് പ്രധാന കാരണം വീട്ടില്‍ നിന്ന് കൃത്യമായി ഗുണപാഠങ്ങള്‍ പഠിക്കാത്തതിനാലാണെന്നും അതുകൊണ്ടാണ് ഇത്തരമൊരു നിയമം പാസാക്കാനൊരുങ്ങുന്നതെന്നും ചൈനീസ് പാര്‍ലമെന്റ് വ്യക്തമാക്കി.

🔳അമേരിക്കന്‍ ഇന്റര്‍നെറ്റ് ഭീമന്‍ ഗൂഗിളിന് റഷ്യയില്‍ വന്‍ തിരിച്ചടി. ഗൂഗിള്‍ റഷ്യയില്‍ നിന്നും ഉണ്ടാക്കുന്ന വാര്‍ഷിക വരുമാനത്തിന്റെ 20 ശതമാനം വരെ പിഴയടക്കണം എന്നാണ് പുതിയ ഉത്തരവ്. നിയമവിരുദ്ധമായ കണ്ടന്റുകള്‍ നീക്കം ചെയ്യുന്നതുമായി ബന്ധപ്പെട്ടാണ് ഈ പിഴ എന്നാണ് റോയിട്ടേര്‍സ് റിപ്പോര്‍ട്ട് പറയുന്നത്. നേരത്തെ തന്നെ നിയമവിരുദ്ധ കണ്ടന്റുകള്‍ നീക്കം ചെയ്യുന്നതിലെ കാലതാമസത്തിനും മറ്റുമായി വര്‍ഷത്തില്‍ 4.58 ലക്ഷം ഡോളര്‍ ഗൂഗിള്‍ വാര്‍ഷിക പിഴയായി അടയ്ക്കണം എന്ന് റഷ്യന്‍ കമ്യൂണിക്കേഷന്‍ റഗുലേറ്റിംഗ് അതോറിറ്റി വിധിച്ചിരുന്നു. ഈ ഫൈനാണ് ഇപ്പോള്‍ ഗൂഗിളിന്റെ റഷ്യയില്‍ നിന്നുള്ള വാര്‍ഷിക വരുമാനത്തിന്റെ 20 ശതമാനം വരെ എന്ന് ആക്കിയത്. ഇത് ഏകദേശം 240 ദശലക്ഷം ഡോളര്‍ വരും.  

🔳ട്വന്റി-20 ലോകകപ്പ് യോഗ്യതാ മത്സരത്തില്‍ സ്‌കോട്ട്‌ലന്റിന് തുടര്‍ച്ചയായ രണ്ടാം വിജയം. പാപ്പുവ ന്യൂ ഗിനിയയെ 17 റണ്‍സിന് തോല്‍പ്പിച്ചു. 166 റണ്‍സ് വിജയലക്ഷ്യം പിന്തുടര്‍ന്ന പാപ്പുവ ന്യൂ ഗിനിയ 19.3 ഓവറില്‍ 148 റണ്‍സിന് പുറത്തായി.  നാല് വിക്കറ്റ് വീഴ്ത്തിയ ജോഷ് ഡേവേയുടെ ബൗളിങ്ങാണ് പാപ്പുവ ന്യൂ ഗിനിയയെ തകര്‍ത്തത്.

🔳ട്വന്റി 20 ക്രിക്കറ്റ് ലോകകപ്പ് യോഗ്യതാ റൗണ്ട് മത്സരത്തില്‍ ഒമാനെ തോല്‍പ്പിച്ച് ബംഗ്ലാദേശ്. 26 റണ്‍സിനാണ് ബംഗ്ലാദേശിന്റെ വിജയം. ആദ്യം ബാറ്റ് ചെയ്ത ഉയര്‍ത്തിയ 154 റണ്‍സ് പിന്തുടര്‍ന്ന ഒമാന് നിശ്ചിത 20 ഓവറില്‍ ഒമ്പത് വിക്കറ്റ് നഷ്ടത്തില്‍ 127 റണ്‍സ് എടുക്കാനെ സാധിച്ചുള്ളു.

🔳കേരളത്തില്‍ ഇന്നലെ 82,408 സാമ്പിളുകള്‍ പരിശോധിച്ചതില്‍ 7643 പേര്‍ക്ക് കോവിഡ്-19 സ്ഥിരീകരിച്ചു. പ്രതിവാര ഇന്‍ഫെക്ഷന്‍ പോപ്പുലേഷന്‍ റേഷ്യോ  പത്തിന് മുകളിലുള്ള 158 തദ്ദേശ സ്വയംഭരണ പ്രദേശങ്ങളിലായി 211 വാര്‍ഡുകളാണുള്ളത്. കഴിഞ്ഞ ദിവസങ്ങളിലുണ്ടായ 77 മരണങ്ങളാണ് കോവിഡ്-19 മൂലമാണെന്ന് ഇന്നലെ സ്ഥിരീകരിച്ചത്. ഇതോടെ ആകെ മരണം 27,002 ആയി. ഇന്നലെ രോഗം സ്ഥിരീകരിച്ചവരില്‍ 44 പേര്‍ സംസ്ഥാനത്തിന് പുറത്ത് നിന്നും വന്നവരാണ്. 7166 പേര്‍ക്ക് സമ്പര്‍ക്കത്തിലൂടെയാണ് രോഗം ബാധിച്ചത്. 353 പേരുടെ സമ്പര്‍ക്ക ഉറവിടം വ്യക്തമല്ല. 80 ആരോഗ്യ പ്രവര്‍ത്തകര്‍ക്കാണ് രോഗം ബാധിച്ചത്. രോഗം സ്ഥിരീകരിച്ച് ചികിത്സയിലായിരുന്ന 10,488 പേര്‍ രോഗമുക്തി നേടി. ഇതോടെ 80,262 പേരാണ് രോഗം സ്ഥിരീകരിച്ച് ഇനി ചികിത്സയിലുള്ളത്. വാക്‌സിനേഷന്‍ എടുക്കേണ്ട ജനസംഖ്യയുടെ 94 ശതമാനം പേര്‍ക്ക് ഒരു ഡോസ് വാക്‌സിനും  46.2 ശതമാനം പേര്‍ക്ക് രണ്ട് ഡോസ് വാക്‌സിനും നല്‍കി.

🔳കോവിഡ് ബാധിച്ചവരുടെ ജില്ല തിരിച്ചുള്ള കണക്കുകള്‍ : തൃശൂര്‍ 1017, തിരുവനന്തപുരം 963, എറണാകുളം 817, കോഴിക്കോട് 787, കോട്ടയം 765, പാലക്കാട് 542, കൊല്ലം 521, കണ്ണൂര്‍ 426, പത്തനംതിട്ട 424, ഇടുക്കി 400, മലപ്പുറം 353, ആലപ്പുഴ 302, വയനാട് 185, കാസര്‍ഗോഡ് 141.

🔳രാജ്യത്ത് ഇന്നലെ 14,933 പേര്‍ക്ക് കോവിഡ് സ്ഥിരീകരിച്ചപ്പോള്‍ 19,443 പേര്‍ രോഗമുക്തി നേടി. മരണം 199. ഇതോടെ ആകെ മരണം 4,52,684 ആയി. ഇതുവരെ 3,41,08,323 പേര്‍ക്ക് രോഗം സ്ഥിരീകരിച്ചു. രാജ്യത്ത് നിലവില്‍ 1.71 ലക്ഷം കോവിഡ് രോഗികള്‍.

🔳മഹാരാഷ്ട്രയില്‍ ഇന്നലെ 1,638 പേര്‍ക്കും തമിഴ്നാട്ടില്‍ 1,179 പേര്‍ക്കും കോവിഡ് സ്ഥിരീകരിച്ചു. മറ്റെല്ലാ സംസ്ഥാനങ്ങളിലും ആയിരത്തില്‍ താഴെ മാത്രം കോവിഡ് രോഗികള്‍.

🔳ആഗോളതലത്തില്‍ ഇന്നലെ 3,82,435 പേര്‍ക്ക് കോവിഡ് സ്ഥിരീകരിച്ചു. അമേരിക്കയില്‍ 55,122 പേര്‍ക്കും ഇംഗ്ലണ്ടില്‍ 43,738 പേര്‍ക്കും റഷ്യയില്‍ 33,740 പേര്‍ക്കും തുര്‍ക്കിയില്‍ 30,862 പേര്‍ക്കും ഇന്നലെ രോഗം സ്ഥിരീകരിച്ചു. ഇതോടെ ആഗോളതലത്തില്‍ 24.22 കോടി ജനങ്ങള്‍ക്ക് കോവിഡ് ബാധിച്ചു. നിലവില്‍ 1.77 കോടി കോവിഡ് രോഗികള്‍.

🔳ആഗോളതലത്തില്‍ 6,641 മരണമാണ് ഇന്നലെ റിപ്പോര്‍ട്ട് ചെയ്തത്. അമേരിക്കയില്‍ 1285 പേരും റഷ്യയില്‍ 1015 പേരും ഉക്രെയിനില്‍ 538 പേരും ബ്രസീലില്‍ 334 പേരും  ഇന്നലെ മരിച്ചു. ആഗോളതലത്തില്‍ കോവിഡ് ബാധിച്ച് മരിച്ചവരുടെ എണ്ണം 49.27 ലക്ഷം.

🔳5 ജി പരീക്ഷണങ്ങളുടെ ഭാഗമായി വൊഡാഫോണ്‍ ഐഡിയ, എഞ്ചിനീയറിംഗ്- കണ്‍സ്ട്രക്ഷന്‍ കമ്പനിയായ ലാര്‍സന്‍ & ടുബ്രോയുമായി സഹകരിക്കും. 5 ജി അധിഷ്ഠിത സ്മാര്‍ട്ട് സിറ്റി സൊലൂഷന്‍സ് പരീക്ഷണങ്ങളിലാണ് ഇരുവരും പങ്കാളികളാവുന്നത്. എല്‍ &ടിയുടെ സ്മാര്‍ട്ട് സിറ്റി പ്ലാറ്റ്ഫോമുകള്‍ക്കായി വീഡിയോ ആര്‍ട്ടിഫിഷ്യല്‍ ഇന്റലിജന്‍സ്, ഇന്റര്‍നെറ്റ് ഓഫ് തിങ്ങ്സ് എന്നിവയുമായി ബന്ധപ്പെട്ടാണ് വോഡാഫോണ്‍ ഐഡിയ 5ജി പരീക്ഷണാര്‍ത്ഥം ഉപയോഗിക്കുക. പൂനെയിലാണ് ആദ്യ ഘട്ടത്തില്‍ പരീക്ഷണങ്ങള്‍ നടക്കുക.

🔳കേരളം ആസ്ഥാനമായി പ്രവര്‍ത്തിക്കുന്ന മറ്റൊരു സ്ഥാപനം കൂടി പ്രാരംഭ ഓഹരി വില്പനക്കൊരുങ്ങുന്നു. ഫെഡറല്‍ ബാങ്കിന്റെ കീഴിയുള്ള ബാങ്കിതര ധനകാര്യ സ്ഥാപനമായ ഫെഡ്ബാങ്ക് ഫിനാന്‍ഷ്യല്‍ സര്‍വീസ് (ഫെഡ്ഫിന) ആണ് ഐപിഒയുമായെത്തുന്നത്. 750-1125 കോടി രൂപ സമാഹരിക്കുകയാണ് ലക്ഷ്യം. 2010ല്‍ ബാങ്കിതര ധനകാര്യ സ്ഥാപനമായി പ്രവര്‍ത്തനം തുടങ്ങിയ ഫെഡ്ഫിനക്ക് രാജ്യത്തൊട്ടാകെ 435ലധികം ശാഖകളുണ്ട്. സ്വകാര്യ ഇക്വിറ്റി നിക്ഷേപകാരയ ഹോംഗ്രോണ്‍ 2018ല്‍ കമ്പനിയില്‍ 400 കോടി രൂപ നിക്ഷേപം നടത്തിയിരുന്നു. നിലവില്‍ 26ശതമാനം ഓഹരി വിഹിതമണിവര്‍ക്കുള്ളത്.

🔳പൃഥ്വിരാജ് നായകനായി എത്തിയ ഹൊറര്‍ ത്രില്ലര്‍ ചിത്രം 'എസ്ര'യുടെ ഹിന്ദി പതിപ്പ് റിലീസിന് ഒരുങ്ങുന്നു. 'ഡിബുക്ക്' എന്ന് പേരിട്ട ചിത്രത്തില്‍ ഇമ്രാന്‍ ഹാഷ്മിയും നികിത ദത്തുമാണ് കേന്ദ്ര കഥാപാത്രങ്ങളെ അവതരിപ്പിക്കുന്നത്. ചിത്രത്തിന്റെ ടീസര്‍ പുറത്തുവിട്ടു. എസ്ര ഒരുക്കിയ ജയകൃഷ്ണന്‍ തന്നെയാണ് ഡിബുക്കും സംവിധാനം ചെയ്യുന്നത്. ഒക്ടോബര്‍ 29ന് ആമസോണ്‍ പ്രൈം വീഡിയോസില്‍ ചിത്രം പ്രദര്‍ശനത്തിനെത്തും. ദര്‍ശന ബനിക്, പ്രണവ് രഞ്ജന്‍, മാനവ് കൌള്‍ യൂരി സുരി, ഡെന്‍സില്‍ സ്മിത്ത്, വിപിന്‍ ശര്‍മ, ഇവാന്‍, വിവാന സിംഗ്, സുദേവ് നായര്‍ തുടങ്ങിയ താരങ്ങള്‍ ചിത്രത്തില്‍ അഭിനയിക്കുന്നു.

🔳മൂവിടുഡേ ക്രിയേഷന്‍സിന്റെ ബാനറില്‍ നിര്‍മ്മിക്കുന്ന 'നിണം' എന്ന ചിത്രത്തിന്റെ മോഷന്‍ പോസ്റ്റര്‍ ശ്രദ്ധ നേടുന്നു. രാത്രിയുടെ യാമങ്ങളില്‍ നരവേട്ട ലക്ഷ്യമിട്ട് രണ്ടുപേര്‍ മിന്നല്‍പ്പിണര്‍ പോലെ ഒരാള്‍ക്കു നേരെ നീങ്ങുന്നതാണ് മോഷന്‍ പോസ്റ്ററിലുള്ളത്. തീര്‍ത്തും ദുരൂഹതത നിറഞ്ഞതാണ് പോസ്റ്റര്‍. പ്രതികാരത്തിലൂന്നിയ ഫാമിലി സസ്‌പെന്‍സ് ത്രില്ലറാണ് നിണം. അമര്‍ദീപ് സംവിധാനം ചെയ്യുന്ന ചിത്രത്തിന് കഥ, തിരക്കഥ, സംഭാഷണം ഒരുക്കുന്നത് വിഷ്ണുരാഗ് ആണ്. ഗിരീഷ് കടയ്ക്കാവൂര്‍, സൂര്യ കൃഷ്ണ, മനീഷ് മോഹനന്‍, ശരത് ശ്രീഹരി, സജിത്ത്, മിഥുന്‍ പുലരി, പ്രദീപ് ആനന്ദന്‍ , രാജേഷ് ഭാനു, ലതദാസ്, കലാഭവന്‍ നന്ദന എന്നിവരാണ് അഭിനേതാക്കള്‍.

🔳ഥാറിന്റെ അഞ്ച്  ഡോര്‍ പതിപ്പിനെ അവതരിപ്പിക്കാന്‍ മഹീന്ദ്ര.  ഇതുകൂടാതെ പുതിയ ബൊലേറോ, സ്‌കോര്‍പ്പിയോ തുടങ്ങി 9 വാഹനങ്ങള്‍ സമീപഭാവിയില്‍ പുറത്തിറക്കുമെന്നും മഹീന്ദ്ര പറയുന്നു. എസ്യുവി വിപണിയിലെ ആധിപത്യം ഉറപ്പിക്കുക എന്ന ലക്ഷ്യത്തോടെയാകും ഥാര്‍ അടക്കം പുതിയ വാഹനങ്ങളുടെ വരവ് എന്നാണ് റിപ്പോര്‍ട്ടുകള്‍. ഈ 5 ഡോര്‍ പതിപ്പിന്റെ സ്‌റ്റൈലിംഗ് നിലവിലെ മോഡലിന് സമാനമായി തുടരുമെന്നാണ് പ്രതീക്ഷിക്കുന്നത്. 12.78 ലക്ഷം മുതല്‍ 15.08 ലക്ഷം വരെയാണ് 2021 മഹീന്ദ്ര ഥാറിന്റെ നിലവിലെ എക്‌സ്-ഷോറൂം വില.

🔳ജീവിക്കാന്‍ വേണ്ടി അപ്പാര്‍ട്ട്മെന്റ് കെട്ടിടങ്ങള്‍ തൂത്തുതുടയ്ക്കുന്ന മെര്‍ജാന്‍ ഹാനിമിന്റെ കഥയാണിത്. ചോരയും മാംസവുമുള്ള, ജീവന്‍ തുടിക്കുന്ന കഥാപാത്രമായി അവള്‍ പുസ്തകത്താളുകളില്‍നിന്നും നമ്മുടെ മുന്നില്‍ പ്രത്യക്ഷപ്പെടുന്നു. അധ്വാനവര്‍ഗത്തിന്റെ പശ്ചാത്തലത്തില്‍ സ്ത്രീകളുടെ അവകാശങ്ങളും സാമൂഹികനീതിയും പ്രമേയമാക്കുന്ന എഴുത്തുകാരി സെറയ് സാഹിനറുടെ ടര്‍ക്കിഷ് നോവല്‍. 'കുല്‍'. മാതൃഭൂമി. വില 161 രൂപ.

🔳പ്രമേഹം നിയന്ത്രിക്കുന്നതില്‍ ഭക്ഷണത്തിനുള്ള പങ്ക് വളരെ പണ്ടു തന്നെ തെളിയിക്കപ്പെട്ടിട്ടുള്ളതാണ്. ഭക്ഷണരീതിയില്‍ മാറ്റംവരുത്തി പ്രമേഹത്തെ നിയന്ത്രിക്കാനാകും. പ്രമേഹം പിടിപെട്ടാല്‍ പിന്നെ എന്തൊക്കെ കഴിക്കാം എന്ന സംശയം ആണ് പലര്‍ക്കും. ഇന്നും ഇത് സംബന്ധിച്ച് പല പഠനങ്ങളും പുറത്തുവന്നുകൊണ്ടിരിക്കുന്നു. സ്ട്രോബറി, ബ്ലൂബെറി, ബ്ലാക്ക്ബെറി തുടങ്ങിയ പഴങ്ങള്‍ പ്രമേഹ രോഗികള്‍ക്ക് ധൈര്യമായി കഴിക്കാം. ഇവയുടെ ഗ്ലൈസെമിക് സൂചിക വളരെ കുറവാണ്. കൂടാതെ ഫൈബറും ആന്റിഓക്സിഡന്റുകളും ധാരാളം അടങ്ങിയ ഇവ രക്തത്തിലെ പഞ്ചസാരയുടെ അളവിനെ നിയന്ത്രിക്കുകയും ചെയ്യും. ആപ്പിളാണ് രണ്ടാമതായി ഈ പട്ടികയിലെ ഒന്നാമന്‍. മധുരമുണ്ടെങ്കിലും പ്രമേഹരോഗികള്‍ക്കും ആപ്പിള്‍ ധൈര്യമായി കഴിക്കാം. രക്തത്തിലെ പഞ്ചസാരയുടെ അളവ് നിയന്ത്രിക്കുന്നതിന് സഹായകമാണ് ആപ്പിള്‍. ഓറഞ്ചാണ് ഈ പട്ടികയിലെ മൂന്നാമന്‍. ആസിഡ് അംശമുള്ള പഴങ്ങള്‍ പൊതുവേ പ്രമേഹരോഗികള്‍ക്ക് കഴിക്കാവുന്നതാണ്.  കിവിയാണ് അടുത്തതായി ഈ പട്ടികയില്‍ ഉള്‍പ്പെടുന്നത്. വിറ്റാമിന്‍ സി, പൊട്ടാസ്യം, നാരുകള്‍ ഇവയടങ്ങിയ കിവി, പ്രമേഹരോഗികള്‍ക്ക് ഏറ്റവും മികച്ച പഴങ്ങളിലൊന്നാണ്. രക്തത്തിലെ പഞ്ചസാരയുടെ അളവ് കുറയ്ക്കാന്‍ കിവിക്ക് കഴിയുമെന്നാണ് പഠനങ്ങളില്‍  പറയുന്നത്. നാരുകള്‍, വിറ്റാമിന്‍ കെ, ആന്റിഓക്‌സിഡന്റുകള്‍ ഇവ  സബര്‍ജില്ലില്‍ ധാരാളമായി അടങ്ങിയിട്ടുണ്ട്. ഇവയിലെ പോഷകങ്ങള്‍ രക്തത്തിലെ പഞ്ചസാരയുടെ അളവ് നിയന്ത്രിക്കാന്‍ സഹായിക്കും. മാത്രമല്ല, ഗ്ലൈസെമിക് ഇന്‍ഡക്‌സ് കുറഞ്ഞ പഴമാണ് സബര്‍ജില്‍.
➖➖➖➖➖➖➖➖


    *━━━━━ NEWS UPDATES ━━━*
    
_*🌍 © MIKHAIEL [ ◆-- LUCIFER --◆ ]*_
`}) 

 }));
}

///
