(function(){
  const byRoute=Object.fromEntries(pages.map(p=>[p.route,p]));
  const section=(route,block)=>byRoute[route]?.sections.find(s=>s.block===block);
  const update=(route,block,values)=>{const s=section(route,block);if(s)Object.assign(s,values)};

  if(byRoute['/guide/']) byRoute['/guide/'].name='展示会の実践ガイド';

  update('/','FV',{heading:'展示会の呼び込み・リード獲得に特化したスタッフサービス',body:'PATHOSは、展示会当日の呼び込み・声掛けからリード獲得、社員への引き継ぎまでを担うスタッフサービスです。受付・案内を中心とする一般的な展示会コンパニオンとは役割が異なり、来場者との最初の接点をつくり、商談につなげることに重点を置いています。'});
  update('/','課題',{heading:'展示会当日、社員が呼び込みまで担っていませんか？',body:'展示会の企画や集客を担当していても、当日の呼び込みまで担える人員を十分に確保できないことがあります。営業メンバーが呼び込みに回ると、その分、商品説明や商談に使える時間は減ります。PATHOSは当日の声掛け・リード獲得を支援し、社員が詳しい説明や商談に集中しやすい体制をつくります。'});
  update('/','最終CTA',{heading:'次回の展示会について相談する',body:'PATHOSについて社内で共有・比較したい方はサービス資料を、具体的な展示会について相談したい方はお問い合わせをご利用ください。'});
  update('/price/','提供範囲の違い',{heading:'コンパニオン・説明員とPATHOSの違い'});
  update('/price/','FAQ / CTA',{heading:'料金についてよくあるご質問',body:'最少発注人数・日数、料金に含まれる範囲、追加費用、キャンセル、継続利用時の料金など、費用に関するよくある質問をまとめます。社内で比較・共有したい方はサービス資料を、具体的な条件を相談したい方はお問い合わせをご利用ください。'});
  update('/compare/','CTA',{heading:'どこまで外部に任せるか相談する',body:'自社社員・コンパニオン・営業代行のどれが合うか迷っている場合は、展示会の日程・人数・社員の役割などをもとにご相談いただけます。まず社内で比較したい方はサービス資料もご利用ください。'});
  update('/guide/','イントロ',{heading:'展示会のリード獲得・呼び込みに役立つ実践ガイド',body:'展示会では、当日の人員配置や呼び込み、リードの数え方など、成果を左右する運用上の判断が多くあります。ここでは、リード獲得・呼び込みを中心に、準備から当日の運用まで実務に役立つ情報をまとめます。'});
  update('/guide/','記事一覧',{heading:'ガイド一覧'});
  update('/guide/','サービス導線',{heading:'呼び込み・リード獲得をスタッフに任せる',body:'展示会当日の呼び込みやリード獲得を外部に任せたい場合は、PATHOSのサービス内容・料金・導入事例もあわせてご確認ください。社内共有にはサービス資料を、具体的な相談にはお問い合わせをご利用いただけます。'});
  update('/guide/exhibition-lead-generation/','結論',{heading:'展示会のリード獲得数・獲得率はどう見るべきか'});
  update('/guide/exhibition-lead-generation/','CTA',{heading:'展示会のリード獲得について相談する',body:'展示会当日の人員配置や声掛け、リード獲得の体制づくりを外部に任せたい場合は、PATHOSへご相談ください。サービス内容・料金・導入事例も確認できます。社内共有にはサービス資料を、具体的な相談にはお問い合わせをご利用ください。'});
  update('/guide/exhibition-callout/','声をかける相手',{heading:'声をかける相手の決め方'});
  update('/guide/exhibition-callout/','CTA',{heading:'展示会の呼び込み・リード獲得について相談する',body:'展示会当日の呼び込みやリード獲得をスタッフに任せたい場合は、必要人数や当日の役割からご相談いただけます。サービス内容・料金・導入事例も確認できます。社内共有にはサービス資料を、具体的な相談にはお問い合わせをご利用ください。'});
  update('/case/','CTA',{heading:'次回の展示会について相談する',body:'展示会当日の人員不足や、社員が商談に集中できないといった課題がある場合は、展示会の時期・必要人数・現在の体制など、決まっている範囲でご相談ください。料金や実践ガイドもあわせて確認でき、社内共有にはサービス資料をご利用いただけます。'});
  update('/case/{slug}/','概要',{heading:'支援概要'});
  update('/case/{slug}/','導入前の課題',{heading:'導入前の課題'});
  update('/case/{slug}/','CTA',{heading:'次回の展示会について相談する',body:'展示会当日の人員体制やリード獲得について相談したい場合は、展示会の時期・人数・現在の運営方法など、決まっている範囲でお問い合わせください。料金や関連する実践ガイドもあわせて確認でき、社内共有にはサービス資料をご利用いただけます。'});
  update('/download/','FV',{body:'PATHOSのサービス内容を社内で検討・共有できるよう、対応範囲・料金・導入までの流れをまとめた資料です。展示会当日の呼び込み・リード獲得を外部に任せる場合の比較にもご利用いただけます。'});
  update('/download/thanks/','3カラムカード',{body:'導入事例と実践ガイドから、新しいコンテンツを3件表示します。各カードには種別、タイトル、概要を掲載します。'});
  update('/contact/','イントロ',{heading:'展示会当日の人員やリード獲得についてご相談ください',body:'展示会当日の人員体制や呼び込み、リード獲得、料金・依頼方法についてご相談いただけます。展示会名や時期、必要人数など、決まっている範囲でお知らせください。'});
  update('/contact/thanks/','関連コンテンツ導入',{body:'あわせて、PATHOSの導入事例や、展示会現場での呼び込み・リード獲得に関する実践ガイドをご覧いただけます。'});
  update('/contact/thanks/','3カラムカード',{body:'導入事例と実践ガイドから、新しいコンテンツを3件表示します。各カードには種別、タイトル、概要を掲載します。'});

  const top=byRoute['/'];
  if(top && !section('/','実践情報')){
    const at=top.sections.findIndex(s=>s.block==='運営会社 / 担当者');
    top.sections.splice(at<0?top.sections.length:at,0,{
      block:'実践情報',purpose:'導入事例と実践ガイドへの入口をつくる',heading:'展示会成果を高める実践情報',
      body:'PATHOSの導入事例と、展示会現場での呼び込み・リード獲得に役立つ実践ガイドをご紹介します。サービスの比較・検討や、次回展示会の準備にお役立てください。',
      inputs:'CMS公開データ',note:'case / guide を横断して新しい3件程度を表示。導入事例と実践ガイドを同じ枠で扱う'
    });
  }

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
