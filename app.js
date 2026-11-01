const modules=[
{title:'DATA INPUT',short:'INPUT',detail:'01 / Data Input — documents, media, databases and APIs enter the system.',desc:'Collect and prepare information from documents, media, databases, APIs and connected systems.'},
{title:'AI PROCESSING',short:'PROCESS',detail:'02 / AI Processing — information becomes structured, searchable intelligence.',desc:'Apply machine learning, language processing, transcription, translation and analysis.'},
{title:'AUTOMATION & LOGIC',short:'LOGIC',detail:'03 / Automation & Logic — workflows and integrations turn intelligence into action.',desc:'Connect systems, create repeatable processes and automate useful business tasks.'},
{title:'SOFTWARE APPLICATIONS',short:'APPS',detail:'04 / Software Applications — applications deliver capabilities people can use.',desc:'Build websites, custom applications, customer portals and internal tools.'},
{title:'CUSTOMER VALUE',short:'VALUE',detail:'05 / Customer Value — useful results, improved operations and new opportunities.',desc:'Deliver searchable information, better workflows, usable products and measurable outcomes.'}
];
const stageKeywords=['INFORMATION','INTELLIGENCE','ACTION','PRODUCTS','RESULTS'];
const NS='http://www.w3.org/2000/svg';
function el(tag,attrs={},parent){const n=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(parent)parent.append(n);return n}
function line(g,x1,y1,x2,y2,color='#aec8df',width=1){return el('line',{x1,y1,x2,y2,stroke:color,'stroke-width':width},g)}
function rect(g,x,y,w,h,fill='none',stroke='#b2cbe2',sw=1){return el('rect',{x,y,width:w,height:h,fill,stroke,'stroke-width':sw},g)}
function txt(g,x,y,s,size=9,color='#9fbdd8'){const t=el('text',{x,y,'font-size':size,fill:color,'font-family':'monospace','letter-spacing':'.4'},g);t.textContent=s;return t}
function path(g,d,stroke='#b8d3e9',sw=1,fill='none'){return el('path',{d,stroke,'stroke-width':sw,fill,'stroke-linejoin':'round','stroke-linecap':'round'},g)}
function circle(g,cx,cy,r,stroke='#a8c6e0',sw=1,fill='none'){return el('circle',{cx,cy,r,stroke,'stroke-width':sw,fill},g)}
function bolt(g,x,y){circle(g,x,y,2.4,'#c4d9e9',.75);line(g,x-1.3,y,x+1.3,y,'#c4d9e9',.65)}
function gear(g,cx,cy,r=18,teeth=12){circle(g,cx,cy,r,'#d3e3f1',1.2,'#10273c');circle(g,cx,cy,r*.65,'#7197ba',.8);circle(g,cx,cy,r*.24,'#d1e3f2',1);for(let k=0;k<teeth;k++){let a=2*Math.PI*k/teeth;line(g,cx+Math.cos(a)*(r-1),cy+Math.sin(a)*(r-1),cx+Math.cos(a)*(r+4),cy+Math.sin(a)*(r+4),'#c2d7e8',2)}}
function cooling(g,x,y,w,h){rect(g,x,y,w,h,'#10253a','#c5d9e9',1.1);for(let k=5;k<w-4;k+=6)line(g,x+k,y+5,x+k,y+h-5,'#789fbe',1);bolt(g,x+4,y+4);bolt(g,x+w-4,y+h-4)}
function pipe(g,d){path(g,d,'#a5c3dd',3);path(g,d,'#173c5b',1.3)}
function moduleSvg(g,i){const x=i*192+16,y=70;const sub=el('g',{'data-module':i},g);const core=el('g',{transform:`translate(${x} ${y})`},sub);
// All five modules share a precisely aligned, flat horizontal drive-shaft datum.
line(core,-4,89,178,89,'#5e8fb8',.8);line(core,0,18,0,162,'#466b8d',.6);line(core,174,18,174,162,'#466b8d',.6);
// Machined coupling flanges, not square outer module containers.
for(const fx of [5,169]){rect(core,fx-5,59,10,62,'#10273d','#b9d3e8',1);for(let j=0;j<5;j++)bolt(core,fx,64+j*13)}
pipe(core,'M 10 89 H 164');
if(i===0){ // input manifold: multi-port intake drum, filters, valves and signal traces
path(core,'M 18 64 L 30 47 L 128 47 L 145 64 L 145 114 L 128 132 L 30 132 L 18 114 Z','#c8dceb',1.4,'#0b2136');
rect(core,30,52,95,74,'none','#769fc1',.8);for(let k=0;k<6;k++){const yy=60+k*11;pipe(core,`M -4 ${yy} H 27 L 38 ${yy+4} H 63`);circle(core,13,yy,3,'#c9dfed',.9,'#0b2136');line(core,43,yy+4,62,yy+4,'#7db1df',1)}
cooling(core,68,57,48,66);for(let k=0;k<5;k++){circle(core,125,64+k*13,3,'#b6d5eb',1,'#183c58');pipe(core,`M 128 ${64+k*13} H 149`)}gear(core,139,44,10,8);pipe(core,'M 91 47 V 34 H 139');rect(core,83,21,25,13,'#10253a','#b9d3e8',1);txt(core,87,30,'IO',8,'#b7d7ed')}
if(i===1){ // processor: circular stator, heatsink and PCB substrate
path(core,'M 22 47 H 140 L 155 63 V 118 L 140 135 H 22 L 12 117 V 64 Z','#c9ddeb',1.5,'#0b2236');
for(let k=0;k<8;k++){line(core,35+k*13,48,35+k*13,136,'#4d7799',.6)}
circle(core,86,89,51,'#c3dbea',1.8,'#0b253b');circle(core,86,89,43,'#7fa9cc',1);circle(core,86,89,33,'#d0e2ef',1.1,'#112d45');circle(core,86,89,23,'#8bb4d7',1.3);for(let k=0;k<16;k++){let a=2*Math.PI*k/16;line(core,86+Math.cos(a)*35,89+Math.sin(a)*35,86+Math.cos(a)*42,89+Math.sin(a)*42,'#d2e2ee',2)}rect(core,72,76,28,26,'#183e5d','#d7e7f4',1.4);txt(core,77,92,'AI',13,'#e4f0fb');cooling(core,18,20,42,21);cooling(core,113,20,42,21);for(let k=0;k<6;k++){pipe(core,`M ${22+k*25} 48 V 42`)}gear(core,148,145,12,10)}
if(i===2){ // logic: branching conduit matrix, relay banks and rotating selector
path(core,'M 24 40 H 143 L 157 53 V 130 L 143 143 H 24 L 13 130 V 53 Z','#c7dceb',1.4,'#0c2236');
for(let k=0;k<3;k++){rect(core,28,53+k*28,38,20,'#132f48','#b5d3e9',1);rect(core,112,53+k*28,36,20,'#132f48','#b5d3e9',1);for(let j=0;j<3;j++)bolt(core,35+j*11,63+k*28);pipe(core,`M 66 ${63+k*28} H 78 V ${63+k*28}`);pipe(core,`M 98 ${63+k*28} H 112`)}
gear(core,88,89,19,12);pipe(core,'M 88 43 V 69');pipe(core,'M 88 109 V 137');cooling(core,62,20,54,15);for(let k=0;k<3;k++){pipe(core,`M ${72+k*12} 35 V 48`)}for(let k=0;k<3;k++)circle(core,88,63+k*27,3,'#93bce1',1,'#173c5a')}
if(i===3){ // apps: chassis with stacked daughterboards and external IO harness
path(core,'M 20 36 H 150 L 161 48 V 132 L 150 146 H 20 L 12 132 V 48 Z','#c6dbe9',1.5,'#0c2236');
rect(core,31,46,110,89,'#102b43','#9cbed8',1);for(let k=0;k<4;k++){const yy=53+k*19;rect(core,39,yy,93,15,'#143650','#a9cbe4',.9);for(let j=0;j<7;j++)rect(core,48+j*9,yy+4,5,7,'none','#79a5c7',.65);circle(core,123,yy+7,2,'#c4dff1',1,'#60a5fa')}
for(let k=0;k<5;k++){pipe(core,`M 141 ${54+k*15} H 164`);pipe(core,`M 10 ${54+k*15} H 31`)}cooling(core,46,18,77,15);gear(core,148,151,10,8)}
if(i===4){ // output: graduated conical transmission, flywheel and split ports
path(core,'M 12 62 H 47 L 68 51 H 111 L 152 76 L 169 89 L 152 102 L 111 127 H 68 L 47 116 H 12 Z','#c8ddea',1.5,'#0d263c');
for(const r of [48,39,29])circle(core,88,89,r,'#95b7d4',1);circle(core,88,89,19,'#d2e5f1',1.2,'#173952');for(let k=0;k<12;k++){let a=2*Math.PI*k/12;line(core,88+Math.cos(a)*20,89+Math.sin(a)*20,88+Math.cos(a)*38,89+Math.sin(a)*38,'#9dc0de',1)}
for(let k=0;k<5;k++){let yy=61+k*14;pipe(core,`M 156 ${yy} H 181`);circle(core,165,yy,2,'#a9cae4',.7,'#61a9ef')}gear(core,37,44,12,10);cooling(core,18,122,34,15)}
// Blueprint circuit illumination is an independent overlay on each machine module.
// It follows the actual drawn components, rather than a generic rectangle or glow.
const circuit=el('g',{'class':'circuit-illumination','aria-hidden':'true'},core);
const traces=[
 ['M 25 89 H 48 V 72 H 75','M 75 72 H 108 V 103 H 143','M 90 40 V 64'],
 ['M 24 89 H 55 L 71 75','M 101 102 L 124 89 H 153','M 86 60 V 77'],
 ['M 24 63 H 68 L 80 78','M 97 89 H 143','M 86 110 V 136'],
 ['M 16 89 H 41 V 72 H 132','M 44 110 H 130 V 89 H 158','M 87 46 V 62'],
 ['M 18 89 H 65','M 105 89 H 160','M 88 56 V 76']
][i];
traces.forEach((d,k)=>path(circuit,d,'#80c6ff',2.4));
for(let k=0;k<4;k++)circle(circuit,44+k*29,89,2.5,'#bfe6ff',1,'#77c5ff');
// Shared mechanical base rail, bolted feet, identification and dimension lines.
path(core,'M 23 150 H 151 L 157 158 H 17 Z','#adc9df',1,'#10283d');for(const foot of [35,137]){rect(core,foot-11,157,22,7,'#0b2236','#b6d1e5',.9);bolt(core,foot,161)}
for(let k=0;k<3;k++){line(core,35+k*50,14,35+k*50,20,'#88a9c5',.8);line(core,35+k*50,164,35+k*50,175,'#88a9c5',.8)}
txt(sub,x+4,y-29,`FIG. 00${i+1} / ${modules[i].short}`,12,'#a3c9ec');
const keyword=txt(sub,x+87,y+235,stageKeywords[i],13,'#cbe6ff');keyword.setAttribute('text-anchor','middle');keyword.setAttribute('font-weight','bold');keyword.setAttribute('letter-spacing','1.2');line(sub,x+5,y+193,x+169,y+193,'#6c96b8',.7);txt(sub,x+44,y+207,`MODULE ${String(i+1).padStart(2,'0')}`,8,'#a3c0d7');return sub}
function build(target,hero=false){const svg=el('svg',{viewBox:'0 0 1000 330',role:'img','aria-label':'Five connected flat engineering blueprint modules'},target);const bg=el('g',{},svg);for(let j=0;j<20;j++)line(bg,0,j*18,1000,j*18,'#335574',.25);for(let j=0;j<55;j++)line(bg,j*18,0,j*18,330,'#335574',.25);const g=el('g',{},svg);const parts=modules.map((_,i)=>moduleSvg(g,i));for(let i=0;i<4;i++){const x=190+i*192;const connector=el('g',{'data-connector':i},g);line(connector,x,155,x+18,155,'#6faeff',3);el('circle',{cx:x+9,cy:155,r:4,fill:'#a9cfff'},connector)}if(hero){parts.forEach(p=>p.style.opacity='1')}return {svg,parts,connectors:[...g.querySelectorAll('[data-connector]')]}}
const customerProcess=[
{title:'UNDERSTAND THE PROBLEM',desc:"Tell us what's slowing you down, what isn't working, or what you want to create. We identify the requirements and opportunities."},
{title:'DESIGN THE SOLUTION',desc:'We determine which technologies, tools and processes can solve your problem effectively—without adding unnecessary complexity.'},
{title:'ENGINEER THE SYSTEM',desc:'We develop the software, connect the necessary systems, and implement the logic, automation or AI your solution requires.'},
{title:'BUILD & DELIVER',desc:'We turn the design into a usable website, application, business tool or technology product—and test it before delivery.'},
{title:'CREATE REAL VALUE',desc:'Your business gets technology designed to save time, reduce repetitive work, improve access to information or enable new capabilities.'}
];
const hero=build(document.getElementById('hero-machine'),true);const assembled=build(document.getElementById('assembly'));assembled.parts.forEach(p=>p.style.opacity='0');assembled.connectors.forEach(c=>c.style.opacity='0');const stageLabels=document.getElementById('stageLabels');const processCards=document.getElementById('processCards');modules.forEach((m,i)=>{const d=document.createElement('div');d.className='stage-label';d.innerHTML=`<b>0${i+1}</b><strong class="stage-keyword">${stageKeywords[i]}</strong><span>${m.short}</span>`;stageLabels.append(d);const c=document.createElement('article');c.className='process-card';const n=document.createElement('b');n.textContent=`0${i+1}`;const h=document.createElement('h3');h.textContent=customerProcess[i].title;const p=document.createElement('p');p.textContent=customerProcess[i].desc;c.append(n,h,p);processCards.append(c)});
const story=document.getElementById('engine'),stageDesc=document.getElementById('stageDescription'),progress=document.getElementById('progressFill');let pending=false;
// Each 20% scroll interval installs exactly one component onto a fixed shared shaft.
// Components begin completely transparent and move horizontally from a predictable
// staging rail into their final, pre-aligned engineering coordinates.
const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,n));
const smooth=t=>t*t*(3-2*t);
function update(){
  pending=false;
  const r=story.getBoundingClientRect();
  const range=Math.max(1,story.offsetHeight-window.innerHeight);
  // Reserve the final 28% of the sticky scroll track for viewing the complete machine.
  // Assembly reaches 100% early, while the pinned illustration remains visible.
  const scrollProgress=clamp(-r.top/range);
  const ASSEMBLY_END=.72;
  const v=clamp(scrollProgress/ASSEMBLY_END);
  const completed=Math.min(5,Math.floor(v*5));
  const active=Math.min(4,Math.floor(v*5));
  assembled.parts.forEach((part,i)=>{
    const local=clamp((v-i/5)/(1/5));
    // First portion of each interval: fade in at a fixed horizontal approach.
    // Second portion: dock smoothly at the exact designed x-coordinate.
    const enter=smooth(clamp(local/.82));
    const fade=smooth(clamp(local/.52));
    const approach=(i===0?-1:1)*(1-enter)*90;
    part.setAttribute('transform',`translate(${approach.toFixed(2)} 0)`);
    part.style.opacity=String(fade);
    // A short, scroll-scrubbable charge-up follows the instant this module docks.
    // This is deterministic: scrolling backwards reverses the illumination.
    const charged=clamp((local-.77)/.23);
    const circuit=part.querySelector('.circuit-illumination');
    if(circuit){
      circuit.style.opacity=String(smooth(charged));
      circuit.style.setProperty('--charge',String(charged));
    }
    part.classList.toggle('docked',local>=.995);
  });
  assembled.connectors.forEach((c,i)=>{
    const a=clamp((v-(i+1)/5)/.045);
    c.style.opacity=String(smooth(a));
  });
  [...stageLabels.children].forEach((label,i)=>{
    label.classList.toggle('active',i===active);
    label.classList.toggle('installed',v>=(i+1)/5);
    label.setAttribute('aria-current',i===active?'step':'false');
  });
  stageDesc.textContent=v>=.999?'05 / Assembly complete — one connected system, five capabilities.':modules[active].detail;
  const activated=v>=.998;
  assembled.svg.classList.toggle('machine-online',activated);
  story.classList.toggle('engine-online',activated);
  const hint=story.querySelector('.scrollhint');
  if(hint)hint.textContent=activated?'SYSTEM ONLINE · TAKE A MOMENT TO EXPLORE THE COMPLETE MACHINE':'SCROLL TO ASSEMBLE THE OPPORTUNITY ENGINE ↓';
  progress.style.width=`${(v*100).toFixed(2)}%`;
}
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});window.addEventListener('resize',update);update();
const menu=document.getElementById('menu'),links=document.getElementById('links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('inquiry').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const message=`BUILT TO CREATE — PROJECT INQUIRY\nName: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('project')}\n\nPrepared locally. Not transmitted.`;const out=document.getElementById('prepared');out.value=message;out.hidden=false;document.getElementById('copy').hidden=false;document.getElementById('formNote').textContent='Your inquiry is prepared below. Copy it to send through your preferred channel. No message was sent.'});document.getElementById('copy').addEventListener('click',async()=>{const out=document.getElementById('prepared');try{await navigator.clipboard.writeText(out.value);document.getElementById('formNote').textContent='Copied to clipboard.'}catch{out.focus();out.select()}});

// The original 12 offerings and their original source descriptions/statuses.
const originalOfferings = [
  {
    "id": 1,
    "name": "Custom Software Development",
    "cat": "business",
    "audience": "Small businesses, startups and organizations",
    "summary": "Websites, custom applications and tools designed around real workflows.",
    "revenue": "One-time project fees plus optional maintenance contracts.",
    "status": "Proposed client-service offering"
  },
  {
    "id": 2,
    "name": "Historical Research & Translation",
    "cat": "research",
    "audience": "Researchers, publishers and educational institutions",
    "summary": "Digitized manuscripts, translations, evidence-linked research and searchable collections.",
    "revenue": "Research projects, access subscriptions and institutional licensing.",
    "status": "Existing MANUSCRIPT TRANSLATORS project; commercial offering to be developed"
  },
  {
    "id": 3,
    "name": "Media Intelligence",
    "cat": "research",
    "audience": "Journalists, researchers, creators and teams",
    "summary": "Find useful information inside hours of audio and video.",
    "revenue": "Desktop software licenses, upgrades and potential team editions.",
    "status": "BIG DATAGRAM™ Beta v1 project; verify purchase availability before selling"
  },
  {
    "id": 4,
    "name": "Private AI Systems",
    "cat": "platform",
    "audience": "Organizations needing tailored AI assistance",
    "summary": "Custom AI assistants and private document-question-answering workflows.",
    "revenue": "Setup fees and optional managed-service subscriptions.",
    "status": "Proposed pilot offering"
  },
  {
    "id": 5,
    "name": "Data Intelligence",
    "cat": "business",
    "audience": "Companies managing fragmented data",
    "summary": "Organize, validate and analyze data to support decisions.",
    "revenue": "Data projects, analytics retainers and possible licensing.",
    "status": "Proposed offering"
  },
  {
    "id": 6,
    "name": "Document Processing",
    "cat": "business",
    "audience": "Professional offices and document-heavy teams",
    "summary": "Turn PDFs and records into searchable, structured information.",
    "revenue": "Per-project, volume-based or monthly service fees.",
    "status": "Proposed offering"
  },
  {
    "id": 7,
    "name": "AI & Coding Education",
    "cat": "education",
    "audience": "Learners, community organizations and educators",
    "summary": "Practical introductions to programming, AI and building with technology.",
    "revenue": "Classes, workshops and sponsored training programs.",
    "status": "Proposed THUG CODING® training programs"
  },
  {
    "id": 8,
    "name": "Private Knowledge Search",
    "cat": "platform",
    "audience": "Teams with large internal information libraries",
    "summary": "Search company documents and retrieve answers with source references.",
    "revenue": "Implementation fees and optional subscriptions.",
    "status": "Proposed pilot offering"
  },
  {
    "id": 9,
    "name": "Business Automation",
    "cat": "business",
    "audience": "Small and midsize businesses",
    "summary": "Reduce repetitive administrative work with reliable automated workflows.",
    "revenue": "Workflow setup fees plus maintenance.",
    "status": "Proposed client-service offering"
  },
  {
    "id": 10,
    "name": "Software Testing",
    "cat": "business",
    "audience": "Developers and software businesses",
    "summary": "Test applications, identify failures and improve release confidence.",
    "revenue": "Testing engagements and recurring QA retainers.",
    "status": "Proposed client-service offering"
  },
  {
    "id": 11,
    "name": "Media Production Services",
    "cat": "research",
    "audience": "Podcasters, educators and video creators",
    "summary": "Transcripts, subtitles, translations and audio processing.",
    "revenue": "Per-recording projects or monthly production packages.",
    "status": "Proposed service offering"
  },
  {
    "id": 12,
    "name": "Distributed Compute",
    "cat": "platform",
    "audience": "Developers and research teams",
    "summary": "Coordinate processing jobs across computers and future servers.",
    "revenue": "Managed processing contracts or per-job pricing.",
    "status": "Longer-term infrastructure concept"
  }
];
const offeringGrid=document.getElementById('offeringsGrid');
function renderOfferings(category='all'){
 offeringGrid.replaceChildren();
 originalOfferings.filter(o=>category==='all'||o.cat===category).forEach(o=>{
  const card=document.createElement('article');card.className='offering-card';
  const number=document.createElement('span');number.className='offering-number';number.textContent='OPPORTUNITY '+String(o.id).padStart(2,'0');
  const heading=document.createElement('h3');heading.textContent=o.name;
  const summary=document.createElement('p');summary.textContent=o.summary;
  const status=document.createElement('div');status.className='offering-status';status.textContent=o.status;
  const toggle=document.createElement('button');toggle.type='button';toggle.className='offering-detail-toggle';toggle.textContent='Explore details +';toggle.setAttribute('aria-expanded','false');
  const detail=document.createElement('div');detail.className='offering-details';detail.hidden=true;
  const audience=document.createElement('p');audience.textContent='Who it serves: '+o.audience;
  const revenue=document.createElement('p');revenue.textContent='Business model: '+o.revenue;
  const inquiry=document.createElement('a');inquiry.className='offering-inquiry';inquiry.href='#contact';inquiry.textContent='Discuss this opportunity ↗';
  inquiry.addEventListener('click',()=>{const field=document.querySelector('#inquiry [name="project"]');if(field&&!field.value.trim())field.value='I am interested in '+o.name+'.';});
  detail.append(audience,revenue,inquiry);
  toggle.addEventListener('click',()=>{detail.hidden=!detail.hidden;toggle.setAttribute('aria-expanded',String(!detail.hidden));toggle.textContent=detail.hidden?'Explore details +':'Hide details −';});
  card.append(number,heading,summary,status,toggle,detail);offeringGrid.append(card);
 });
}
renderOfferings();
document.querySelectorAll('.offering-filter').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.offering-filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
 btn.classList.add('active');btn.setAttribute('aria-pressed','true');renderOfferings(btn.dataset.filter);
}));
