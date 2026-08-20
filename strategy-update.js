(function(){
  const byRoute=Object.fromEntries(pages.map(p=>[p.route,p]));
  const section=(route,block)=>byRoute[route]?.sections.find(s=>s.block===block);
  const update=(route,block,values)=>{const s=section(route,block);if(s)Object.assign(s,values)};

  // Public terminology and TOP entry point for the three-layer strategy.
  if(byRoute['/guide/']) byRoute['/guide/'].name='展示会の実践ガイド';
  update('/guide/','イントロ',{purpose:'扱うテーマを明確にする'});
  const top=byRoute['/'];
  if(top && !section('/','実践情報')){
    const at=top.sections.findIndex(s=>s.block==='運営会社 / 担当者');
    top.sections.splice(at<0?top.sections.length:at,0,{
      block:'実践情報',purpose:'導入事例と実践ガイドへの入口をつくる',heading:'展示会成果を高める実践情報',
      body:'PATHOSの導入事例と、展示会現場での呼び込み・リード獲得に役立つ実践ガイドをご紹介します。サービスの比較・検討や、次回展示会の準備にお役立てください。',
      inputs:'CMS公開データ',note:'case / guide を横断して新しい3件程度を表示。導入事例と実践ガイドを同じ枠で扱う'
    });
  }
  update('/price/','FAQ / CTA',{
    purpose:'費用の疑問を解消し、次の検討へつなぐ',
    body:'最少人数、料金に含まれる範囲、追加費用、キャンセル、継続利用時の料金など、費用に関するよくある質問をまとめます。社内で比較・共有したい方はサービス資料を、具体的な条件を相談したい方はお問い合わせをご利用ください。',
    note:'FAQの後に /compare/ /case/ /guide/ への補助導線と、資料DL / 問い合わせの2CTA'
  });
  update('/compare/','CTA',{
    purpose:'比較後に次の行動を選べるようにする',
    body:'どこまで外部に任せるべきか迷っている場合は、展示会の日程・人数・社員の役割などをもとにご相談いただけます。まず社内で比較したい方はサービス資料もご利用ください。',
    note:'料金 / 導入事例 / 実践ガイドへの補助導線＋資料DL / 問い合わせの2CTA'
  });
  update('/guide/','サービス導線',{
    purpose:'実践情報からサービス検討へつなぐ',
    body:'当日の人員不足やリード獲得体制そのものを外部に任せたい場合は、PATHOSのサービス内容・料金・導入事例もあわせてご確認ください。社内共有にはサービス資料を、具体的な相談にはお問い合わせをご利用いただけます。',
    note:'TOP / price / case / download / contact への導線'
  });
  update('/guide/exhibition-lead-generation/','CTA',{
    purpose:'実践情報からサービス検討へつなぐ',
    body:'展示会当日の人員配置や声掛け、リード獲得の体制づくりを外部に任せたい場合は、PATHOSへご相談ください。PATHOSのサービス内容・料金・導入事例も確認でき、社内共有用の資料ダウンロードと具体相談のお問い合わせを用意します。',
    note:'TOP / price / case / download / contact への導線。記事末で問い合わせ一本にしない'
  });
  update('/guide/exhibition-callout/','CTA',{
    purpose:'実践情報からサービス検討へつなぐ',
    body:'展示会当日の呼び込みやリード獲得をスタッフに任せたい場合は、必要人数や当日の役割からご相談いただけます。PATHOSのサービス内容・料金・導入事例も確認でき、社内共有用の資料ダウンロードと具体相談のお問い合わせを用意します。',
    note:'TOP / price / case / download / contact への導線。記事末で問い合わせ一本にしない'
  });
  update('/case/','CTA',{
    purpose:'事例閲覧後の次の検討へつなぐ',
    body:'自社でも近い課題がある場合は、展示会の時期や必要な人数、現在の体制をもとにご相談ください。料金や展示会の実践ガイドもあわせて確認でき、社内共有にはサービス資料を、具体的な相談にはお問い合わせをご利用いただけます。',
    note:'price / guide / download / contact への導線'
  });
  update('/case/{slug}/','検討プロセス',{
    note:'CMS内部フィールド：流入経路 / 検索語 / 比較先 / 決め手 / 課題 / 展示会 / 業界 / 人数 / 日数 / 成果。公開本文とは分けて保持し、マーケ調査・運用改善に再利用'
  });
  update('/case/{slug}/','CTA',{
    purpose:'事例閲覧後の次の検討へつなぐ',
    body:'同じような展示会体制や人員不足について相談したい場合は、展示会の時期・人数・現在の運営方法をもとにお問い合わせください。料金や関連する実践ガイドもあわせて確認でき、社内共有にはサービス資料をご利用いただけます。',
    note:'price / guide / download / contact への導線。関連ガイドを文脈に応じて表示'
  });

  const relatedMap={
    '/price/':[['比較を見る','/compare/'],['導入事例を見る','/case/'],['実践ガイドを見る','/guide/']],
    '/compare/':[['料金を見る','/price/'],['導入事例を見る','/case/'],['実践ガイドを見る','/guide/']],
    '/guide/':[['サービスTOP','/'],['料金を見る','/price/'],['導入事例を見る','/case/']],
    '/guide/exhibition-lead-generation/':[['サービスTOP','/'],['料金を見る','/price/'],['導入事例を見る','/case/']],
    '/guide/exhibition-callout/':[['サービスTOP','/'],['料金を見る','/price/'],['導入事例を見る','/case/']],
    '/case/':[['料金を見る','/price/'],['実践ガイドを見る','/guide/']],
    '/case/{slug}/':[['料金を見る','/price/'],['実践ガイドを見る','/guide/']]
  };
  const related=p=>{const items=relatedMap[p.route]||[];return items.length?`<div class="related-links"><span>あわせて確認</span>${items.map(([label,route])=>`<a href="#${route}">${label}</a>`).join('')}</div>`:''};
  const practicalCards=()=>`<div class="module grid-3"><a class="card" href="#/case/"><div class="placeholder">[ 導入事例 ]</div><small>導入事例</small><strong>PATHOSの導入事例</strong><p style="font-size:11px;color:#666">課題・支援内容・成果を確認</p></a><a class="card" href="#/guide/exhibition-lead-generation/"><div class="placeholder">[ リード獲得ガイド ]</div><small>実践ガイド</small><strong>リード獲得数・獲得率の考え方</strong><p style="font-size:11px;color:#666">KPIや改善の考え方を確認</p></a><a class="card" href="#/guide/exhibition-callout/"><div class="placeholder">[ 呼び込みガイド ]</div><small>実践ガイド</small><strong>呼び込み・声掛けのポイント</strong><p style="font-size:11px;color:#666">現場で使う考え方を確認</p></a></div>`;

  const baseRenderSpecial=renderSpecial;
  renderSpecial=function(s,p,index){
    const b=s.block;
    if(b==='実践情報') return `<section class="section">${genericText(s)}${practicalCards()}${wireMeta(s)}</section>`;
    if(b==='3カラムカード') return `<section class="section">${genericText(s)}${practicalCards()}${wireMeta(s)}</section>`;
    if(b==='最終CTA'||b==='CTA'||b==='サービス導線') return `<section class="final-cta"><div class="eyebrow">Contact / Download</div><h2>${esc(s.heading)}</h2><p class="lead">${esc(s.body)}</p>${related(p)}<div class="cta-row" style="justify-content:center"><a class="btn primary" href="#/contact/">問い合わせる</a><a class="btn" href="#/download/">サービス資料</a></div>${wireMeta(s)}</section>`;
    if(b==='FAQ'||b==='FAQ / CTA') return `<section class="section">${genericText(s)}<div class="module faq">${['何名・何日から依頼できますか？','どのくらい前までに申し込めばよいですか？','どのようなスタッフが担当しますか？','交通費・宿泊費・キャンセルはどうなりますか？'].map(q=>`<div class="faq-item"><div class="faq-q">Q. ${q}</div><div class="faq-a">A. ［実際の運用条件を確認後に回答を掲載］</div></div>`).join('')}</div>${related(p)}<div class="cta-row" style="margin-top:24px"><a class="btn primary" href="#/contact/">問い合わせる</a><a class="btn" href="#/download/">サービス資料</a></div>${wireMeta(s)}</section>`;
    return baseRenderSpecial(s,p,index);
  };

  const baseHeader=globalHeader,baseFooter=footer;
  globalHeader=p=>baseHeader(p).replace(/>実践情報</g,'>実践ガイド<');
  footer=()=>baseFooter().replace(/>実践情報</g,'>実践ガイド<');

  const style=document.createElement('style');
  style.textContent='.related-links{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin:26px 0 18px;font-size:11px;color:#666}.related-links span{font-weight:700;color:#777}.related-links a{color:#222;text-underline-offset:3px}.related-links a:hover{text-decoration-thickness:2px}';
  document.head.appendChild(style);

  document.getElementById('pageNav').innerHTML=pages.map(p=>`<a class="page-link" data-route="${esc(p.route)}" href="#${encodeURI(p.route)}">${esc(p.name)}<small>${esc(p.route)}</small></a>`).join('');
  render();
})();
