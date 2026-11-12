const $=id=>document.getElementById(id);
const rp=n=>'Rp'+Math.round(n).toLocaleString('id-ID');

/* Menu HP */
const hdr=$('hdr'), burger=$('burger');
if(burger){
burger.addEventListener('click',()=>{const o=hdr.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{hdr.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
}


/* Tema berfoto */
const SERIF='Fraunces,Georgia,serif', SANS='"Plus Jakarta Sans","Segoe UI",sans-serif';
const CATS={landing:'Landing Page',company:'Company Profile',toko:'Toko Online',custom:'Web Custom'};
const THEMES=[
 {k:'senja',n:'Senja',cat:'landing',brand:'Kopi Senja',bg:'#1C130F',ink:'#F3E3CF',ac:'#E9A15B',aci:'#1C130F',dk:'#3A2A21',ff:SERIF,al:'left',nav:['Beranda','Menu','Lokasi'],cta:'Pesan',h:'Seduh pelan, nikmati sore.',p:'Kopi lokal pilihan, diseduh barista berpengalaman.',b:'Lihat Menu',c1:'Biji kopi dari 12 daerah Nusantara',c2:'Manual brew',s:'4,9★',sl:'Rating pelanggan',pos:'center 60%',d:'Gelap dan hangat. Cocok untuk kafe, restoran, dan produk F&B.'},
 {k:'gerak',n:'Gerak',cat:'landing',brand:'FitRun',bg:'#FFFFFF',ink:'#111111',ac:'#FF5A3C',aci:'#FFFFFF',dk:'#111111',ff:SANS,al:'center',nav:['Event','Rute','Komunitas'],cta:'Daftar ↗',h:'Lari lebih jauh, bersama komunitas.',p:'Event lari 5K, 10K, dan 21K setiap bulan di kota Anda.',b:'Daftar Event',c1:'Kategori 5K hingga half marathon',c2:'Fun Run',s:'21K',sl:'Half marathon',pos:'center 40%',d:'Sporty dan energik. Cocok untuk event, komunitas, dan klub olahraga.'},
 {k:'lestari',n:'Lestari',cat:'company',brand:'Hijau Tani',bg:'#F4F8F2',ink:'#173A26',ac:'#2E8B57',aci:'#FFFFFF',dk:'#173A26',ff:SANS,al:'left',nav:['Tentang','Produk','Mitra'],cta:'Hubungi',h:'Pangan sehat dari petani lokal.',p:'Bermitra dengan petani untuk hasil panen yang segar dan adil.',b:'Jadi Mitra',c1:'Kemitraan dengan ratusan petani',c2:'Beras organik',s:'100%',sl:'Tanpa pestisida kimia',pos:'center',d:'Segar dan natural. Cocok untuk agribisnis, koperasi, dan produk organik.'},
 {k:'korporat',n:'Korporat',cat:'company',brand:'LOGAMAS',bg:'#F4F6FA',ink:'#0F2747',ac:'#3BA3FF',aci:'#FFFFFF',dk:'#0F2747',ff:SANS,al:'left',nav:['Layanan','Klien','Karier'],cta:'Jadwalkan ↗',h:'Solusi pajak dan akuntansi untuk bisnis bertumbuh.',p:'Konsultan bersertifikat untuk perusahaan dan UMKM.',b:'Konsultasi',c1:'Pajak, audit, dan payroll',c2:'Tim ahli',s:'15+',sl:'Tahun pengalaman',pos:'center 30%',d:'Formal dan terpercaya. Cocok untuk konsultan, kontraktor, dan perusahaan jasa.'},
 {k:'griya',n:'Griya',cat:'company',brand:'Griya Asri',bg:'#FFFFFF',ink:'#2B2420',ac:'#B0603F',aci:'#FFFFFF',dk:'#2B3A55',ff:SERIF,al:'center',nav:['Tipe Rumah','Lokasi','KPR'],cta:'Survei ↗',h:'Rumah nyaman di pinggir kota.',p:'Hunian modern dengan lingkungan hijau dan akses tol.',b:'Lihat Tipe Rumah',c1:'Tipe 36/72 mulai Rp450 juta',c2:'Tipe Melati',s:'KPR',sl:'Simulasi cicilan',pos:'center 60%',d:'Elegan dengan pencarian listing. Cocok untuk developer properti dan agen.'},
 {k:'bento',n:'Bento',cat:'company',brand:'Nexa Digital',bg:'#F3F2EE',ink:'#141414',ac:'#C6F36B',aci:'#141414',dk:'#141414',ff:SANS,al:'left',nav:['Layanan','Karya','Tim'],cta:'Mulai ↗',h:'Kami bangun produk digital yang bertumbuh.',p:'Strategi, desain, dan pengembangan dalam satu tim.',b:'Lihat Karya',c1:'Strategi · Desain · Kode',c2:'Studi kasus',s:'98%',sl:'Klien lanjut kontrak',pos:'center',d:'Tata letak bento grid yang sedang tren. Cocok untuk agensi, startup, dan konsultan IT.'},
 {k:'ruang',n:'Ruang',cat:'company',brand:'RUANG STUDIO',bg:'#FAFAF8',ink:'#111111',ac:'#D9D6CF',aci:'#111111',dk:'#2A2826',ff:SERIF,al:'left',nav:['Proyek','Studio','Kontak'],cta:'Diskusi ↗',h:'Ruang yang tenang dan fungsional.',p:'Studio arsitektur dan interior untuk hunian tropis.',b:'Lihat Proyek',c1:'Arsitektur & interior',c2:'Rumah Tropis Dago',s:'40+',sl:'Proyek selesai',pos:'center',d:'Minimalis dengan tipografi elegan. Cocok untuk arsitek, interior, dan fotografer.'},
 {k:'nusantara',n:'Nusantara',cat:'toko',brand:'BATIK NARA',bg:'#FBF7F1',ink:'#3B2B26',ac:'#C9A15A',aci:'#2B1E19',dk:'#3B2B26',ff:SERIF,al:'left',nav:['Wanita','Pria','Promo'],cta:'Tas (2)',h:'Koleksi Nusantara, diskon 20%.',p:'Busana batik modern untuk acara formal dan harian.',b:'Belanja Sekarang',c1:'Gratis ongkir ke seluruh Indonesia',c2:'Dress Parang',s:'4,9★',sl:'Ulasan pembeli',pos:'center 22%',d:'Hangat dan berkelas. Cocok untuk fesyen, kerajinan, dan produk lokal.'},
 {k:'segar',n:'Segar',cat:'toko',brand:'dapurmama',bg:'#FFFDF5',ink:'#2D5016',ac:'#7CB342',aci:'#FFFFFF',dk:'#2D5016',ff:SANS,al:'center',nav:['Menu','Katering','Promo'],cta:'Keranjang',h:'Masakan rumahan, dikirim hari ini.',p:'Pesan sebelum jam 10 pagi, tiba saat makan siang.',b:'Pesan Sekarang',c1:'Menu berganti setiap hari',c2:'Sambal Bawang',s:'50+',sl:'Pilihan menu',pos:'center',d:'Ceria dan menggugah selera. Cocok untuk makanan, katering, dan oleh-oleh.'},
 {k:'pop',n:'Pop',cat:'toko',brand:'JAJAN.KU',bg:'#FFE94D',ink:'#111111',ac:'#FF4FA3',aci:'#FFFFFF',dk:'#111111',ff:SANS,al:'center',nav:['Camilan','Bundling','Promo'],cta:'Belanja ↗',h:'Camilan paling rame!',p:'Gratis ongkir hari ini untuk semua varian.',b:'Belanja Sekarang',c1:'Gratis ongkir hari ini',c2:'Choco Bomb',s:'-30%',sl:'Promo minggu ini',pos:'center',d:'Warna berani gaya retro. Cocok untuk brand anak muda dan camilan.'},
 {k:'cetak',n:'Cetak',cat:'custom',brand:'CetakKilat',bg:'#F5F7FB',ink:'#0D1B34',ac:'#E8564A',aci:'#FFFFFF',dk:'#0D1B34',ff:SANS,al:'left',nav:['Produk','Template','Lacak'],cta:'Upload ↗',h:'Cetak online, cepat dan rapi.',p:'Pilih bahan dan jumlah, upload file, kami cetak.',b:'Pesan Sekarang',c1:'File dicek otomatis sebelum cetak',c2:'Banner & brosur',s:'2 hari',sl:'Estimasi selesai',pos:'center',d:'Pemesanan online dan panel produksi. Cocok untuk percetakan dan konveksi.'},
 {k:'sehati',n:'Sehati',cat:'custom',brand:'Klinik Sehati',bg:'#F2FAF9',ink:'#0C3B36',ac:'#0E9F8E',aci:'#FFFFFF',dk:'#0C3B36',ff:SANS,al:'left',nav:['Dokter','Layanan','Jadwal'],cta:'Buat Janji',h:'Buat janji dokter tanpa antre.',p:'Pilih dokter dan jam praktik langsung dari HP.',b:'Pilih Jadwal',c1:'Pengingat jadwal via WhatsApp',c2:'Dokter umum',s:'09.30',sl:'Jadwal tersedia',pos:'center 35%',d:'Sistem reservasi online. Cocok untuk klinik, salon, bengkel, dan studio.'},
 {k:'kelas',n:'Kelas',cat:'custom',brand:'KelasPintar',bg:'#F6F4FF',ink:'#1E1452',ac:'#6C4CF1',aci:'#FFFFFF',dk:'#1E1452',ff:SANS,al:'left',nav:['Kursus','Mentor','Harga'],cta:'Masuk ↗',h:'Belajar skill baru dari mentor praktisi.',p:'Video, kuis, dan sertifikat dalam satu platform.',b:'Mulai Belajar',c1:'Progres belajar tersimpan otomatis',c2:'UI Design',s:'60%',sl:'Progres kursus',pos:'center',d:'Platform kursus online dengan video, progres belajar, dan sertifikat.'}
];
function mkHTML(t){
  const img='img/'+t.k+'.jpg';
  return '<div class="mk '+(t.al==='left'?'left':'')+'" style="--mbg:'+t.bg+';--mink:'+t.ink+';--mac:'+t.ac+';--maci:'+t.aci+';--mdk:'+t.dk+';--mff:'+t.ff.replace(/"/g,"'")+'"><div class="mk-in">'
   +'<div class="mk-nav"><b>'+t.brand+'</b><span class="mk-pills">'+t.nav.map(x=>'<i>'+x+'</i>').join('')+'</span><em>'+t.cta+'</em></div>'
   +'<div class="mk-hero" style="background-image:url('+img+');background-position:'+t.pos+'"><div class="mk-cap"><h5>'+t.h+'</h5><p>'+t.p+'</p><span>'+t.b+'</span></div>'
   +'<div class="mk-chip"><i style="background:#F2C4A0"></i><i style="background:#8D6E63"></i><i style="background:#FFD54F"></i>Pelanggan puas</div></div>'
   +'<div class="mk-row"><div class="mk-c dk">'+t.c1+'</div><div class="mk-c ph" style="background-image:url('+img+');background-position:right 70%"><span>'+t.c2+'</span></div><div class="mk-c st"><strong>'+t.s+'</strong><small>'+t.sl+'</small></div></div>'
   +'</div></div>';
}
const card=t=>'<article class="theme" data-cat="'+t.cat+'"><div class="frame"><div class="bar"><div class="dots"><i></i><i></i><i></i></div><div class="url">tema-'+t.k+'</div></div>'+mkHTML(t)+'</div><div class="theme-meta"><h3>Tema '+t.n+'</h3><span>'+CATS[t.cat]+'</span></div><p class="desc">'+t.d+'</p></article>';
if($('themes')) $('themes').innerHTML=THEMES.map(card).join('');
if($('themesFeatured')) $('themesFeatured').innerHTML=THEMES.filter(t=>['gerak','bento','nusantara'].includes(t.k)).map(card).join('');
if($('heroMock')) $('heroMock').outerHTML=mkHTML(THEMES.find(t=>t.k==='gerak'));

/* Filter tema */
const fbtns=document.querySelectorAll('#filters button');
fbtns.forEach(b=>b.addEventListener('click',()=>{
  fbtns.forEach(x=>x.setAttribute('aria-pressed',x===b));
  const f=b.dataset.f;
  document.querySelectorAll('#themes .theme').forEach(t=>{t.hidden=!(f==='all'||t.dataset.cat===f)});
}));
document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{try{localStorage.setItem('alw_paket',a.dataset.plan)}catch(e){}}));
if($('paket')){try{const p=localStorage.getItem('alw_paket');if(p){$('paket').value=p;localStorage.removeItem('alw_paket')}}catch(e){}}

/* Solusi bertab */
const art=(bg,fg,acc,label)=>`<svg viewBox="0 0 320 220"><rect width="320" height="220" fill="${bg}"/><rect x="20" y="20" width="280" height="22" rx="6" fill="#fff" opacity=".9"/><circle cx="34" cy="31" r="5" fill="${acc}"/><rect x="46" y="28" width="50" height="6" rx="3" fill="${fg}"/><text x="24" y="82" font-family="Plus Jakarta Sans,sans-serif" font-size="17" font-weight="800" fill="${fg}">${label}</text><rect x="24" y="94" width="150" height="6" rx="3" fill="${fg}" opacity=".25"/><rect x="24" y="106" width="110" height="6" rx="3" fill="${fg}" opacity=".25"/><rect x="24" y="124" width="76" height="22" rx="6" fill="${acc}"/><rect x="24" y="162" width="84" height="40" rx="8" fill="#fff"/><rect x="118" y="162" width="84" height="40" rx="8" fill="#fff"/><rect x="212" y="162" width="84" height="40" rx="8" fill="#fff"/><circle cx="250" cy="98" r="34" fill="${acc}" opacity=".25"/><circle cx="250" cy="98" r="18" fill="${acc}"/></svg>`;
const SOL={
  promo:{t:'Landing page untuk promosi',p:'Satu halaman fokus yang mengarahkan pengunjung iklan untuk langsung menghubungi Anda atau membeli.',l:['Cocok untuk iklan Meta, Google, dan TikTok','Tombol WhatsApp di setiap bagian','Selesai dalam hitungan hari'],plan:'Starter · Rp999rb',a:art('#FFF1EE','#1A1A2E','#FF5A3C','Promo Spesial')},
  profil:{t:'Company profile yang kredibel',p:'Website resmi yang menjelaskan siapa Anda, layanan apa yang ditawarkan, dan mengapa klien harus memilih Anda.',l:['Halaman profil, layanan, portofolio, kontak','Email bisnis dengan nama domain sendiri','Panel admin untuk ubah konten'],plan:'Bisnis · Rp3,5jt',a:art('#E6F1FF','#0F2747','#3BA3FF','Mitra Terpercaya')},
  jual:{t:'Toko online milik sendiri',p:'Pelanggan memilih produk, membayar, dan Anda menerima notifikasi pesanan tanpa potongan komisi marketplace.',l:['Katalog produk dengan filter kategori','Pembayaran transfer bank dan QRIS','Cek ongkir dan notifikasi ke WhatsApp'],plan:'Toko Online · Rp4,9jt',a:art('#FBF7F1','#3B2B26','#9C5B3A','Koleksi Terbaru')},
  cetak:{t:'Web custom sesuai kebutuhan',p:'Website dengan fitur khusus yang mengikuti alur kerja bisnis Anda, bukan sebaliknya.',l:['Fitur dan alur kerja dirancang khusus','Panel admin dengan hak akses bertingkat','Integrasi dengan sistem atau aplikasi lain'],plan:'Web Custom · Rp10jt+',a:art('#EEF2FA','#0D1B34','#1554F0','Sistem Custom')}
};
if($('p-sol')){
const stabs=document.querySelectorAll('.sol-tabs button');
function showSol(k){
  const s=SOL[k];
  stabs.forEach(b=>{const on=b.dataset.sol===k;b.setAttribute('aria-selected',on);if(on)$('p-sol').setAttribute('aria-labelledby',b.id)});
  $('solTitle').textContent=s.t;$('solText').textContent=s.p;$('solPlan').textContent=s.plan;
  $('solList').innerHTML=s.l.map(x=>`<li><svg><use href="#i-check"/></svg>${x}</li>`).join('');
  $('solArt').innerHTML=s.a;
}
stabs.forEach(b=>b.addEventListener('click',()=>showSol(b.dataset.sol)));
showSol('promo');
}

/* Formulir */
const form=$('form'),out=$('out'),msg=$('msg');
if(form){
form.addEventListener('submit',e=>{
  e.preventDefault();
  const nama=form.nama.value.trim();
  if(!nama){form.nama.focus();form.nama.placeholder='Nama wajib diisi';return;}
  const usaha=form.usaha.value.trim();
  msg.textContent=`Halo Alwebify, saya ${nama}${usaha?` dari ${usaha}`:''}.\nPaket: ${form.paket.value}\nTema: ${form.tema.value}\n\n${form.pesan.value.trim()||'Mohon info lebih lanjut.'}`;
  out.hidden=false;
});
$('copy').addEventListener('click',e=>{
  const b=e.currentTarget;
  navigator.clipboard.writeText(msg.textContent).then(()=>{b.textContent='Tersalin'}).catch(()=>{
    const r=document.createRange();r.selectNodeContents(msg);const s=getSelection();s.removeAllRanges();s.addRange(r);
    b.textContent='Teks dipilih, tekan Ctrl+C';
  });
});
}
