const haikus = [[
    // Spring
    ['梅が香に', 'のっと日が出る', '山路かな'],
    ['雪とけて', '村いっぱいの', '子どもかな'],
    ['曙の', 'むらさきの幕や', '春の風'],
    ['菜の花や', '月は東に', '日は西に'],
    ['しばらくは', '花の上なる', '月夜かな'],
    ['古池や', '蛙飛び込む', '水の音'],
    ['高嶺星', '蚕飼の村は', '寝しづまり'],
    ['空をゆく', 'ひとかたまりの', '花吹雪'],
    ['外にも出よ', '触るるばかりに', '春の月'],
    ['古池や', '蛙飛び込む', '水の音'],
    ['山路来て', '何やらゆかし', 'すみれ草'],
    ['鶯の', '笠落としたる', '椿かな'],
    ['鶯や', '柳のうしろ', '藪の前'],
    ['梅が香に', 'のつと日の出る', '山路哉'],
    ['行く春や', '鳥啼き魚の', '目は泪'],
    ['春の海', '終日のたり', 'のたりかな'],
    ['行く春や', '重たき琵琶の', '抱き心'],
    ['春や昔', '十五万石の', '城下哉'],
    ['雪残る', '頂ひとつ', '国境'],
    ['赤い椿', '白い椿と', '落ちにけり'],
    ['春めきて', 'ものの果てなる', '空の色'],
    ['山又山', '山桜又', '山桜'],
    ['万緑の', '中や吾子の歯', '生え初むる']
], [
    // Summer
    ['長持ちに', '春ぞくれ行く', '更衣'],
    ['五月雨を', 'あつめてはやし', '最上川'],
    ['夏河を', '越すうれしさよ', '手に草履'],
    ['閑さや', '岩にしみ入る', '蝉の声'],
    ['涼風の', '曲がりくねって', 'きたりけり'],
    ['白牡丹と', 'いふといへども', '紅ほのか'],
    ['匙なめて', '童たのしも', '夏氷'],
    ['プラタナス', '夜も緑なる', '夏は来ぬ'],
    ['ところてん', '煙のごとく', '沈みをり'],
    ['夕立や', '草葉をつかむ', 'むら雀'],
    ['象潟や', '雨に西施が', 'ねぶの花'],
    ['紫陽花や', '昨日の誠', '今日の嘘'],
    ['夏嵐', '机上の白紙', '飛び尽す'],
    ['炎天の', '地上花あり', '百日紅'],
    ['目には青葉', '山ほととぎす', '初鰹'],
    ['おそるべき', '君等の乳房', '夏来る'],
    ['滝落ちて', '群青世界', 'とどろけり'],
    ['夏草や', 'つわものどもが', '夢の跡'],
    ['富士ひとつ', 'うずみ残して', '若葉かな']
], [
    // Autumn
    ['荒海や', '佐渡に横たふ', '天の川'],
    ['砂の如き', '雲流れ行く', '秋の朝'],
    ['名月を', 'とってくれろと', '泣く子かな'],
    ['柿食へば', '鐘が鳴るなり', '法隆寺'],
    ['一枚の', '紅葉かつ散る', '静けさよ'],
    ['ほろほろと', 'むかご落ちけり', '秋の雨'],
    ['名月や', '畳の上に', '松の影'],
    ['突き抜けて', '天上の紺', '曼珠沙華'],
    ['星空へ', '店より林檎', 'あふれをり'],
    ['秋深き', '隣は何を', 'する人ぞ'],
    ['菊の香や', '奈良には古き', '仏たち'],
    ['文月や', '六日も常の', '夜には似ず'],
    ['名月や', '池をめぐりて', '夜もすがら'],
    ['山は暮れて', '野は黄昏の', '芒かな'],
    ['露の世は', '露の世ながら', 'さりながら'],
    ['秋雨や', '身をちぢめたる', '傘の下'],
    ['朝顔に', 'つるべとられて', 'もらい水'],
    ['おりとりて', 'はらりとおもき', 'すすきかな'],
    ['月天心', '貧しき町を', '通りけり'],
    ['秋風や', 'むしたがりし', '赤い花'],
    ['秋の夜や', 'あまへ泣き居る', 'どこかの子']
], [
    // Winter
    ['木枯らしや', '竹に隠れて', 'しづまりぬ'],
    ['遠山に', '日の当たりたる', '枯野かな'],
    ['暮まだき', '星の輝く', '枯野かな'],
    ['ガス灯に', '吹雪輝く', '街を見たり'],
    ['晴天も', '猶つめたしや', '寒の入'],
    ['梅一輪', '一輪ほどの', 'あたたかさ'],
    ['寒月や', '門なき寺の', '天高し'],
    ['木枯らしの', '果てはありけり', '海の音'],
    ['冬の水', '一枝の影も', '欺かず'],
    ['鶴舞ふや', '日は金色の', '雲を得て'],
    ['日と月の', 'ごとく二輪の', '寒牡丹'],
    ['いざ子ども', 'はしりありかん', '玉霰'],
    ['旅に病んで', '夢は枯野を', 'かけめぐる'],
    ['西吹けば', '東にたまる', '落葉かな'],
    ['水仙や', '寒き都の', 'ここかしこ'],
    ['ともかくも', 'あなたまかせの', '年の暮れ'],
    ['元日や', '上々吉の', '浅黄空'],
    ['菊の香や', '月夜ながらに', '冬に入る'],
    ['団栗の', '共に掃かるる', '落葉哉'],
    ['木枯らしの', '果てはありけり', '海の音'],
    ['大寒の', '一戸もかくれなき', '故郷'],
    ['降る雪や', '明治は遠く', 'なりにけり'],
    ['雪だるま', '星のおしゃべり', 'ぺちゃくちゃと']
]]

const randomHaiku = (season?: 0 | 1 | 2 | 3) => {
    const matchedHaikus = haikus[season ? season : Math.floor(Math.random() * 4)]
    return matchedHaikus[Math.floor(Math.random() * matchedHaikus.length)]
}

export default randomHaiku
