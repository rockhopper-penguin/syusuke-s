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