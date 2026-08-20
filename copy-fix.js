(function(){
  const fix=(route,block,heading)=>{
    const page=pages.find(p=>p.route===route);
    const section=page?.sections.find(s=>s.block===block);
    if(section) section.heading=heading;
  };
  fix('/compare/','CTA','自社に合う支援方法を相談する');
  fix('/guide/','サービス導線','呼び込み・リード獲得をPATHOSに任せる');
  if(typeof render==='function') render();
})();
