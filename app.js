var K="steady-quest-v4",S,SW={run:0,t0:0,acc:0,s:"M"},NG=0,EX="2027-02-05";
var SUB={M:"Maths",Sc:"Science",SS:"SST",E:"English",H:"Hindi"};
var PH=["Phase 1 · Foundation: Maths + SST","Phase 2 · Languages: Hindi + English","Phase 3 · Mastery: Science, Maths, papers"];
function x(s,a){return a.map(function(t){return s+":"+t})}
var ITT={L:["📖","Learn","Read once, write a 5-line summary. Done beats perfect."],R:["🧠","Mind-Map Mania","One page per chapter, three colours, no copying."],S:["🏎️","Speed Racer","20 questions in 20 minutes, then beat your own time."],Q:["🎤","Quiz Duel","Write 10 questions and quiz a friend. Loser treats."],G:["✍️","Writing Gym","Write it, then mark it with the marking scheme."],V:["📻","Voice Note Radio","Record a 3-minute summary and play it while walking."],E:["🧩","Escape Room","Make 5 puzzle clues and unlock the answers."],F:["⚡","Flashcard Sprint","10 cards at a time. Keep the ones you miss."],P:["🎯","Practice Arena","Question sets, no peeking at answers."],D:["🕵️","Error Detective","Find every mistake and write why you made it."],H:["💎","HOTS Hunt","Hardest questions first. Struggle is the point."],B:["👹","Boss Fight","Full paper, full time, phone in another room."],C:["🏆","Champion Mock","One last full mock, then fix every mistake."]};
var MS=[
["🧮","Mission Maths",0,222,"Learn the last two chapters, revise all 14 in five days, then race the clock.",[
["L",x("M",["Learn Statistics (ch 13)","Learn Probability (ch 14)"])],
["R",x("M",["Revise ch 1–3 (Day 1)","Revise ch 4–6 (Day 2)","Revise ch 7–9 (Day 3)","Revise ch 10–12 (Day 4)","Revise ch 13–14 (Day 5)"])],
["S",x("M",["Speed round: ch 1–3","Speed round: ch 4–6","Speed round: ch 7–9","Speed round: ch 10–12","Speed round: ch 13–14"])]]],
["🌍","Mission SST",0,28,"Finish the 14 pending chapters, then lock the old ones in with maps and quizzes.",[
["L",x("SS",["History ch 3","History ch 4","History ch 5","Geography ch 2","Geography ch 3","Geography ch 7","Civics ch 2","Civics ch 3","Civics ch 4","Civics ch 5","Economics ch 1","Economics ch 3","Economics ch 4","Economics ch 5"])],
["R",x("SS",["Revise done: History ch 1–2","Revise done: Geography ch 1, 4, 5, 6","Revise done: Civics ch 1 + Economics ch 2","Map work + dates sheet"])],
["Q",x("SS",["Quiz duel: History","Quiz duel: Geography","Quiz duel: Civics","Quiz duel: Economics"])]]],
["📚","Mission Hindi",1,340,"Hindi is your first paper. Grammar, then writing, then literature.",[
["L",x("H",["Sandhi + samas","Alankar + ras","Muhavare + lokoktiyan"])],
["G",x("H",["Apathit gadyansh (3 passages)","Patra lekhan (5 types)","Nibandh (5 topics)"])],
["R",x("H",["Gadya chapters, batch 1","Gadya chapters, batch 2","Kavya, batch 1","Kavya, batch 2"])],
["V",x("H",["Record gadya summaries","Record kavya summaries"])]]],
["✍️","Mission English",1,170,"Two sections of 35 marks: grammar and writing, then textbook.",[
["L",x("E",["Tenses","Voice + reported speech"])],
["G",x("E",["Comprehension (3 passages)","Letter writing (4)","Application writing (3)"])],
["R",x("E",["Textbook prose, batch 1","Textbook prose, batch 2","Poems, batch 1","Poems, batch 2"])],
["E",x("E",["Vocabulary escape room","Grammar error hunt"])]]],
["🔬","Science Mastery",2,140,"The syllabus is done. Revise it, then practise until it is automatic.",[
["R",x("Sc",["Revise Chemistry","Revise Physics","Revise Biology"])],
["F",x("Sc",["Equations deck","Diagrams sheet"])],
["P",x("Sc",["Practice set 1","Practice set 2","Practice set 3"])],
["B",x("Sc",["Science PYQ paper 1","Science PYQ paper 2","Science PYQ paper 3","Fix mistakes from every paper"])]]],
["📐","Maths Mastery",2,262,"Formulas on autopilot, hard questions on purpose, then full papers.",[
["F",x("M",["Algebra formula deck","Geometry + trig formula deck","Mensuration + stats formula deck"])],
["D",x("M",["Error notebook: ch 1–7","Error notebook: ch 8–14"])],
["H",x("M",["HOTS: algebra","HOTS: geometry + trig","HOTS: mensuration + stats","Case-study questions"])],
["B",x("M",["Maths PYQ paper 1","Maths PYQ paper 2","Maths PYQ paper 3"])],
["C",x("M",["Final timed mock","Fix every mistake"])]]],
["👹","Mission Test Arena",2,0,"Papers in exam order: Hindi, SST, then English.",[
["B",x("H",["Hindi PYQ paper 1","Hindi PYQ paper 2","Hindi PYQ paper 3"])],
["B",x("SS",["SST PYQ paper 1","SST PYQ paper 2","SST PYQ paper 3"])],
["B",x("E",["English PYQ paper 1","English PYQ paper 2"])]]]];
var TT=["Rookie","Scout","Scholar","Ninja","Ace","Topper"];
function $(i){return document.getElementById(i)}
function e(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function p2(n){return("0"+n).slice(-2)}
function ld(){try{S=JSON.parse(localStorage.getItem(K))}catch(z){}S=Object.assign({o:0,d:{},x:{},m:{},xp:0,rem:"18:00",on:1,act:"",ph:["2026-12-20","2027-01-15","2027-02-04"]},S||{})}
function sv(){try{localStorage.setItem(K,JSON.stringify(S))}catch(z){}}
function fl(i){var o=[];MS[i][5].forEach(function(q,k){q[1].forEach(function(t){o.push([t,k])})});(S.x[i]||[]).forEach(function(t){o.push([t,-1])});return o}
function dn(i){return fl(i).filter(function(_,j){return S.d[i+"."+j]}).length}
function nx(){for(var i=0;i<MS.length;i++){var T=fl(i);for(var j=0;j<T.length;j++)if(!S.d[i+"."+j])return[i,j,T[j][0],T[j][1]]}return null}
function dl(d){return Math.max(0,Math.ceil((new Date(d)-new Date())/864e5))||0}
function F(){var s=Math.floor((SW.acc+(SW.run?Date.now()-SW.t0:0))/1000);return(s>=3600?Math.floor(s/3600)+":":"")+p2(Math.floor(s/60)%60)+":"+p2(s%60)}
function ping(m){var b=$("ban");b.textContent=m;b.hidden=false;try{if(Notification.permission=="granted")new Notification("Steady Quest",{body:m})}catch(z){}}
function cal(){var t=S.rem.split(":"),n=new Date(),y=n.getFullYear()+p2(n.getMonth()+1)+p2(n.getDate());
return"https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent("Study mission: Steady Quest")+"&details="+encodeURIComponent("Open Steady Quest and finish your next mission.")+"&dates="+y+"T"+t[0]+t[1]+"00/"+y+"T"+p2((+t[0]+1)%24)+t[1]+"00&ctz=Asia%2FKolkata&recur="+encodeURIComponent("RRULE:FREQ=DAILY;UNTIL=20270204")}
function R(){
var lv=Math.floor(Math.sqrt(S.xp/60))+1,pv=Math.pow(lv-1,2)*60,q=Math.pow(lv,2)*60,N=nx();
var tot=0,dd=0,sb={},pp=[[0,0],[0,0],[0,0]];Object.keys(SUB).forEach(function(k){sb[k]=[0,0]});
MS.forEach(function(m,i){fl(i).forEach(function(t,j){var k=t[0].split(":")[0],c=S.d[i+"."+j]?1:0;sb[k][1]++;sb[k][0]+=c;pp[m[2]][1]++;pp[m[2]][0]+=c;tot++;dd+=c})});
var h='<div class="r sp"><div><h1>Steady Quest</h1><div class="mu">'+TT[Math.min(lv-1,5)]+' · Level '+lv+' · '+S.xp+' XP</div></div><div style="text-align:right"><div class="n" style="font-size:30px">'+dl(EX)+'</div><div class="mu">days to Hindi paper (5 Feb)</div></div></div>';
h+='<div class="b" style="margin:10px 0"><i style="width:'+Math.round((S.xp-pv)/(q-pv)*100)+'%"></i></div>';
if(N){var m=MS[N[0]],I=N[3]>=0?ITT[m[5][N[3]][0]]:null,k=N[2].indexOf(":");h+='<div class="c nx" style="--h:'+m[3]+'"><div class="mu">Next up</div><h2>'+m[0]+' '+m[1]+'</h2><p style="margin:0 0 8px"><span class="tag">'+SUB[N[2].slice(0,k)]+'</span> '+e(N[2].slice(k+1))+'</p>'+(I?'<p class="mu">Method: '+I[0]+' <b>'+I[1]+'</b>. '+I[2]+'</p>':'')+'<div class="r"><button class="p" data-a="go" data-i="'+N[0]+'" data-k="'+N[2].slice(0,k)+'">Start now</button><button data-a="op" data-i="'+N[0]+'">Open mission</button></div></div>'}
else h+='<div class="c"><h2>🏆 Every mission complete!</h2><p>Light revision, early sleep, then go and show them.</p></div>';
h+='<div class="c"><h2>Phases</h2>'+PH.map(function(n,i){var r=pp[i][1]-pp[i][0],d=dl(S.ph[i]);return'<div class="r sp" style="margin-top:8px"><span>'+n+'</span><span class="mu">'+pp[i][0]+'/'+pp[i][1]+' · by '+S.ph[i]+' · '+(d?(r/d).toFixed(1)+'/day':'due')+'</span></div><div class="b"><i style="width:'+Math.round(pp[i][0]/pp[i][1]*100)+'%"></i></div>'}).join("")+'</div>';
MS.forEach(function(m,i){var T=fl(i),o=S.o==i,p=Math.round(dn(i)/T.length*100);
h+='<div class="c'+(m[2]>0&&pp[m[2]-1][0]<pp[m[2]-1][1]?" lo":"")+'" style="--h:'+m[3]+'"><button class="mh" data-a="op" data-i="'+i+'" aria-expanded="'+o+'"><div class="r sp"><b class="n" style="font-size:19px">'+m[0]+' '+m[1]+(p==100?" 🏅":"")+'</b><span class="mu">'+m[5].length+' iterations · '+dn(i)+'/'+T.length+' · '+p+'%</span></div><div class="b" style="margin-top:6px"><i style="width:'+p+'%"></i></div></button>';
if(o){h+='<p class="mu">'+m[4]+' Each iteration is more fun than the last; finish about 70% of one to unlock the next.</p>';var off=0,prev=1;
m[5].forEach(function(qq,k){var Q=ITT[qq[0]],L=qq[1].length,c=0;for(var a=0;a<L;a++)if(S.d[i+"."+(off+a)])c++;
h+='<div class="it'+(prev<.7?" lk":"")+'"><div class="r sp"><b>Iteration '+(k+1)+' · '+Q[0]+' '+Q[1]+' '+"★".repeat(k+1)+(c==L?" 🏅":"")+(prev<.7?" 🔒":"")+'</b><span class="mu">'+c+'/'+L+'</span></div><div class="mu">'+Q[2]+'</div><div class="b" style="margin:6px 0"><i style="width:'+Math.round(c/L*100)+'%"></i></div>';
for(var a=0;a<L;a++){var j=off+a,t=qq[1][a],kk=t.indexOf(":"),cd=!!S.d[i+"."+j];h+='<label class="t'+(cd?" d":"")+'"><input type="checkbox" data-i="'+i+'" data-k="'+j+'"'+(cd?" checked":"")+'><span><span class="tag">'+SUB[t.slice(0,kk)]+'</span> '+e(t.slice(kk+1))+'</span></label>'}
h+='</div>';prev=c/L;off+=L});
(S.x[i]||[]).forEach(function(t,a){var j=off+a,kk=t.indexOf(":"),cd=!!S.d[i+"."+j];h+=(a?'':'<div class="it"><b>Your own tasks</b></div>')+'<label class="t'+(cd?" d":"")+'"><input type="checkbox" data-i="'+i+'" data-k="'+j+'"'+(cd?" checked":"")+'><span><span class="tag">'+SUB[t.slice(0,kk)]+'</span> '+e(t.slice(kk+1))+'</span></label>'});
h+='<div class="r" style="margin-top:10px"><select id="ns" aria-label="Subject">'+Object.keys(SUB).map(function(k){return'<option value="'+k+'">'+SUB[k]+'</option>'}).join("")+'</select><input id="nt" placeholder="Add your own task" style="flex:1;min-width:140px" aria-label="New task"><button data-a="add">Add</button></div>'}
h+='</div>'});
h+='<div class="c"><h2>Stopwatch</h2><div class="r sp"><div class="sw" id="sw">'+F()+'</div><select id="ss" aria-label="Subject">'+Object.keys(SUB).map(function(k){return'<option value="'+k+'"'+(SW.s==k?" selected":"")+'>'+SUB[k]+'</option>'}).join("")+'</select></div><div class="r" style="margin-top:10px"><button class="p" data-a="sw">'+(SW.run?"Pause":"Start")+'</button><button data-a="rs">Reset</button><button data-a="lg">Log session (+1 XP per min)</button></div></div>';
h+='<div class="c"><h2>Tracker</h2><div class="r sp"><b>'+dd+' done · '+(tot-dd)+' left</b><span class="mu">'+Math.round(dd/tot*100)+'% of the quest</span></div><div class="b" style="margin:8px 0 14px"><i style="width:'+Math.round(dd/tot*100)+'%"></i></div>'+Object.keys(SUB).map(function(k){var v=sb[k];return'<div class="r sp" style="margin-top:8px"><span>'+SUB[k]+'</span><span class="mu">'+v[0]+'/'+v[1]+' tasks · '+(S.m[k]||0)+' min</span></div><div class="b"><i style="width:'+Math.round(v[0]/v[1]*100)+'%"></i></div>'}).join("")+'</div>';
h+='<div class="c"><h2>Reminders</h2><div class="r"><label>Daily time <input type="time" id="rt" value="'+S.rem+'"></label><label class="r"><input type="checkbox" id="ro"'+(S.on?" checked":"")+' style="width:20px;height:20px;min-height:0"> Nag me</label></div><div class="r" style="margin:10px 0"><a class="p" href="'+cal()+'" target="_blank" rel="noopener">Add daily reminder to Google Calendar</a><button data-a="test">Test</button><button data-a="ask">Allow notifications</button></div><p class="mu">This page can only nag while it is open (every 30 min after your time until you study). The Calendar button makes a daily event that rings on your phone even when the page is closed.</p><div class="r">'+PH.map(function(n,i){return'<label class="mu">Phase '+(i+1)+' by <input type="date" id="pd'+i+'" value="'+S.ph[i]+'"></label>'}).join("")+'</div></div>';
$("app").innerHTML=h}
document.addEventListener("click",function(ev){var t=ev.target.closest("[data-a]");if(!t)return;var a=t.dataset.a;
if(a=="op")S.o=S.o==+t.dataset.i?-1:+t.dataset.i;
else if(a=="go"){S.o=+t.dataset.i;SW.s=t.dataset.k;if(!SW.run){SW.t0=Date.now();SW.run=1}S.act=new Date().toDateString()}
else if(a=="add"){var v=$("nt").value.trim();if(!v)return;(S.x[S.o]=S.x[S.o]||[]).push($("ns").value+":"+v)}
else if(a=="sw"){if(SW.run){SW.acc+=Date.now()-SW.t0;SW.run=0}else{SW.t0=Date.now();SW.run=1;S.act=new Date().toDateString()}}
else if(a=="rs"){SW.run=0;SW.acc=0}
else if(a=="lg"){if(SW.run){SW.acc+=Date.now()-SW.t0;SW.run=0}var m=Math.floor(SW.acc/60000);if(m<1){ping("Study at least 1 minute to log a session.");return}S.m[SW.s]=(S.m[SW.s]||0)+m;S.xp+=m;S.act=new Date().toDateString();SW.acc=0;ping("Logged "+m+" min of "+SUB[SW.s]+". +"+m+" XP!")}
else if(a=="ask"){try{Notification.requestPermission()}catch(z){}return}
else if(a=="test"){var N=nx();ping("Mission time! "+(N?MS[N[0]][1]+": "+N[2].slice(N[2].indexOf(":")+1):"all done"));return}
sv();R()});
document.addEventListener("change",function(ev){var t=ev.target;
if(t.type=="checkbox"&&t.dataset.i!=null){var k=t.dataset.i+"."+t.dataset.k;if(t.checked){S.d[k]=1;S.xp+=10;S.act=new Date().toDateString()}else{delete S.d[k];S.xp=Math.max(0,S.xp-10)}}
else if(t.id=="rt")S.rem=t.value;else if(t.id=="ro")S.on=t.checked?1:0;else if(t.id.indexOf("pd")==0)S.ph[+t.id[2]]=t.value;
else if(t.id=="ss"){SW.s=t.value;return}else return;sv();R()});
setInterval(function(){var el=$("sw");if(el)el.textContent=F();var n=new Date(),tm=p2(n.getHours())+":"+p2(n.getMinutes());
if(S.on&&tm>=S.rem&&S.act!=n.toDateString()&&Date.now()-NG>18e5){NG=Date.now();var N=nx();if(N)ping("Mission time! "+MS[N[0]][0]+" "+MS[N[0]][1]+": "+N[2].slice(N[2].indexOf(":")+1))}},1000);
ld();R();
