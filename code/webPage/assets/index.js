/** ----- 定数定義 ----- */
/** Facebook リンク */
const FACEBOOK_LINK = 'https://www.facebook.com/penguin.s.seto';
/** GitHub リンク */
const GITHUB_LINK = 'https://github.com/rockhopper-penguin';
/** Instagram リンク */
const INSTAGRAM_LINK = 'https://www.instagram.com/rock.hopper_penguin/';
/** Note リンク */
const NOTE_LINK = 'https://note.com/rock_penguin';
/** Qiita リンク */
const QITTA_LINK = 'https://qiita.com/rockhopper-penguin';
/** Zenn リンク */
const ZENN_LINK = 'https://zenn.dev/rock_penguin';
/** ------------------- */

/**
 * ローディング完了
 */
const loadCompleated = () => {
    console.log('読み込み完了')
    // ローディングモーダルのDOM取得
    const getLoadingModal = document.getElementById("loading__modal");
    // ローディング非表示
    getLoadingModal.style.display = "none";
}

/** 
 * ページ上部に遷移
 */
const pageToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'});
}

/**
 * リンクを新規タブで開く
 * @param string serviceName リンクを開きたいサービス名
 */
const openLink = (serviceName) => {
    // 実リンクを取得
    const link = getLink(serviceName)
    // 新規タブでリンクを開く
    window.open(link, '_blank');
}

/**
 * サービス名に一致するリンク名を返す
 * @param string serviceName 取得したいリンク名に対応するサービス
 * @returns string サービスの実リンク
 */
const getLink = (serviceName) => {
    switch (serviceName) {
        // facebook
        case 'facebook':
            return FACEBOOK_LINK;
        // GitHub
        case 'github':
            return GITHUB_LINK;
        // Instagram
        case 'instagram':
            return INSTAGRAM_LINK;
        // Note
        case 'note':
            return NOTE_LINK;
        // Qiita
        case 'qiita':
            return QITTA_LINK;
        // Zenn
        case 'zenn':
            return ZENN_LINK;
        // どれにも一致しない場合は、URLフラグメントを返す
        default:
            return '#';
    }
}