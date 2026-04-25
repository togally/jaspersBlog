(function () {
  var trigger = document.getElementById('search-trigger');
  var overlay = document.getElementById('search-overlay');
  var closeBtn = document.getElementById('search-overlay__close');
  var backdrop = document.getElementById('search-overlay__backdrop');
  var resultsRoot = document.getElementById('search-results');
  var pagefindInited = false;

  function open() {
    if (!overlay) return;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    if (!pagefindInited && typeof PagefindUI === 'function') {
      new PagefindUI({
        element: '#search-results',
        showSubResults: true,
        showImages: false,
        translations: {
          placeholder: '搜索博文…',
          clear_search: '清空',
          load_more: '加载更多',
          search_label: '搜索',
          filters_label: '筛选',
          zero_results: '没有找到「[SEARCH_TERM]」相关内容',
          many_results: '找到 [COUNT] 条「[SEARCH_TERM]」相关内容',
          one_result: '找到 1 条「[SEARCH_TERM]」相关内容',
          alt_search: '没有找到「[SEARCH_TERM]」，是否搜索 [DIFFERENT_TERM]？',
          search_suggestion: '没有找到「[SEARCH_TERM]」相关内容，建议尝试：[DIFFERENT_TERM]',
          searching: '搜索「[SEARCH_TERM]」…'
        }
      });
      pagefindInited = true;
    }
    setTimeout(function () {
      var input = resultsRoot && resultsRoot.querySelector('input');
      if (input) input.focus();
    }, 50);
  }

  function close() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay && !overlay.hidden) close();
  });
})();
