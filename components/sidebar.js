/**
 * DESIGN CAREERS 共通サイドバー（レフトナビ）コンポーネント
 * [機能]
 * - HTML側でのメニュー編集を不要とし、本JSファイルのみで全ページのナビゲーションを一元管理します。
 * - 現在の表示URL（window.location）を自動的に解析し、アクティブなリンクをハイライトします。
 * - 複数アコーディオン（サブメニュー）に完全対応し、該当ページ滞在時は自動展開します。
 */
class SidebarComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // 属性からルートディレクトリへのベースパスを取得 (デフォルトは同階層 ".")
    const basePath = this.getAttribute('base-path') || '.';

    // ==========================================
    // 🎨 メニュー構造定義エリア
    // 今後メニューを追加・変更する場合は、ここを編集するだけで全ページに反映されます。
    // ==========================================
    this.innerHTML = `
      <!-- モバイル用ヘッダー -->
      <header id="mobile-header" class="lg:hidden fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-slate-200 px-5 py-3 flex justify-between items-center shadow-sm">
        <a href="${basePath}/index.html" class="flex flex-col items-center text-center">
          <img src="${basePath}/images/dh_logo.png" alt="Diamond head DESIGN" class="h-10 w-auto object-contain mb-0.5" onerror="this.src='https://placehold.co/160x40/e2e8f0/475569?text=LOGO'">
          <span class="block text-[8px] font-bold text-slate-700 tracking-[0.1em] leading-tight">
            DESIGN CAREERS
          </span>
        </a>
        <button id="menu-toggle" class="text-blue-600 font-bold text-sm tracking-widest focus:outline-none">
          MENU
        </button>
      </header>

      <!-- レフトナビゲーション本体 -->
      <aside id="left-nav" class="w-72 h-screen fixed top-0 left-0 bg-white border-r border-slate-200 z-50 flex flex-col py-10 px-8 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 overflow-y-auto">
        
        <!-- ロゴエリア -->
        <a href="${basePath}/index.html" class="block text-center mb-12">
          <img src="${basePath}/images/dh_logo.png" alt="Diamond head DESIGN" class="w-full max-w-[200px] h-auto mx-auto object-contain mb-4" onerror="this.src='https://placehold.co/200x50/e2e8f0/475569?text=LOGO'">
          <span class="block text-xs font-bold text-slate-700 tracking-[0.15em] leading-tight text-center">
            DESIGN CAREERS
          </span>
        </a>

        <!-- メニューリンク -->
        <nav class="flex-grow">
          <ul class="space-y-6">
            <!-- 1. HOME -->
            <li>
              <a href="${basePath}/index.html" data-nav="home" class="flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-600 transition group">
                HOME 
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition"></i>
              </a>
            </li>

            <!-- 2. インタビュー (アコーディオン) -->
            <li class="group has-sub">
              <a href="#" data-target="interviewContent" class="js-accordion-btn flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-600 transition">
                インタビュー 
                <i data-lucide="chevron-right" class="js-accordion-arrow w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-transform duration-300"></i>
              </a>
              <ul id="interviewContent" class="js-accordion-content hidden pl-4 mt-3 space-y-3 border-l-2 border-slate-100 ml-2">
                <li>
                  <a href="${basePath}/interview/interview_2019.html" data-nav="interview-2019" class="block text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                    2019年新卒入社
                  </a>
                </li>
                <li>
                  <a href="${basePath}/interview/interview_2018.html" data-nav="interview-2018" class="block text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                    2018年新卒入社
                  </a>
                </li>
              </ul>
            </li>
            
            <!-- 3. RECRUIT / 採用 (アコーディオン・新規集約) -->
            <li class="group has-sub">
              <a href="#" data-target="recruitContent" class="js-accordion-btn flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-600 transition">
                RECRUIT / 採用 
                <i data-lucide="chevron-right" class="js-accordion-arrow w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-transform duration-300"></i>
              </a>
              <ul id="recruitContent" class="js-accordion-content hidden pl-4 mt-3 space-y-3 border-l-2 border-slate-100 ml-2">
                <li>
                  <a href="https://recruit.jobcan.jp/diamondhead/job_offers/2197383" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between text-sm font-medium text-slate-600 hover:text-blue-600 transition group/link">
                    <span>新卒採用</span>
                    <i data-lucide="external-link" class="w-3 h-3 text-slate-400 group-hover/link:text-blue-600"></i>
                  </a>
                </li>
                <li>
                  <a href="https://recruit.jobcan.jp/diamondhead/list?category_id=13413" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between text-sm font-medium text-slate-600 hover:text-blue-600 transition group/link">
                    <span>中途・業務委託</span>
                    <i data-lucide="external-link" class="w-3 h-3 text-slate-400 group-hover/link:text-blue-600"></i>
                  </a>
                </li>
                <li>
                  <a href="${basePath}/outsourcing.html" data-nav="outsourcing" class="block text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                    業務委託契約について
                  </a>
                </li>
              </ul>
            </li>

            <!-- 4. 会社説明会 -->
            <li>
              <a href="https://recruit.jobcan.jp/diamondhead/job_offers/1462258" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-600 transition group">
                会社説明会 
                <i data-lucide="external-link" class="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition"></i>
              </a>
            </li>
            
            <!-- 5. 制作事例 -->
            <li>
              <a href="https://design.diamondhead.jp/works/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-600 transition group">
                制作事例 
                <i data-lucide="external-link" class="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition"></i>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    `;

    // 自律的なイベントハンドリング・アクティブハイライト処理を実行
    this.initSidebarInteraction();
  }

  initSidebarInteraction() {
    const menuToggle = this.querySelector('#menu-toggle');
    const leftNav = this.querySelector('#left-nav');

    // 1. モバイル用のメニュー開閉処理
    if (menuToggle && leftNav) {
      menuToggle.addEventListener('click', () => {
        leftNav.classList.toggle('-translate-x-full');
        if (leftNav.classList.contains('-translate-x-full')) {
          menuToggle.textContent = 'MENU';
          menuToggle.classList.remove('text-slate-800');
          menuToggle.classList.add('text-blue-600');
        } else {
          menuToggle.textContent = 'CLOSE';
          menuToggle.classList.remove('text-blue-600');
          menuToggle.classList.add('text-slate-800');
        }
      });

      // リンクがクリックされたとき、モバイル幅なら自動で閉じる
      const navLinks = leftNav.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          // アコーディオンのトリガーボタン（サブメニューを開く親要素）はドロワーを閉じない
          if (link.classList.contains('js-accordion-btn')) {
            e.preventDefault();
            return;
          }
          if (window.innerWidth < 1024) {
            leftNav.classList.add('-translate-x-full');
            menuToggle.textContent = 'MENU';
            menuToggle.classList.remove('text-slate-800');
            menuToggle.classList.add('text-blue-600');
          }
        });
      });
    }

    // 2. ★汎用化されたアコーディオン制御
    const accordionBtns = this.querySelectorAll('.js-accordion-btn');
    accordionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const content = this.querySelector(`#${targetId}`);
        const arrow = btn.querySelector('.js-accordion-arrow');

        if (content) {
          const isHidden = content.classList.contains('hidden');
          if (isHidden) {
            this.expandAccordion(content, arrow);
          } else {
            this.collapseAccordion(content, arrow);
          }
        }
      });
    });

    // 3. 自動アクティブページハイライト（発光）＆展開処理
    const currentUrl = window.location.href;
    let activeKey = '';

    if (currentUrl.includes('interview_2019.html')) {
      activeKey = 'interview-2019';
    } else if (currentUrl.includes('interview_2018.html')) {
      activeKey = 'interview-2018';
    } else if (currentUrl.includes('outsourcing.html')) {
      activeKey = 'outsourcing';
    } else if (currentUrl.includes('index.html')) {
      activeKey = 'home';
    } else {
      // 開発中の相対パスや、ドメイン直下の場合のフォールバック
      const path = window.location.pathname;
      if (path === '/' || path.endsWith('/') || path.endsWith('index.html')) {
        activeKey = 'home';
      }
    }

    // 一致したメニュー要素をハイライト色に変化させ、親アコーディオンを開く
    if (activeKey) {
      const activeLink = this.querySelector(`a[data-nav="${activeKey}"]`);
      if (activeLink) {
        
        // 親階層がサブメニュー（アコーディオン）の中にあるかチェック
        const parentContent = activeLink.closest('.js-accordion-content');
        
        if (parentContent) {
          // サブメニュー内の現在地リンクの文字色をハイライト
          activeLink.classList.remove('text-slate-600');
          activeLink.classList.add('text-blue-600', 'font-bold');
          
          // 親アコーディオンを自動展開状態にして、親メニュー名もハイライト
          const parentBtn = parentContent.previousElementSibling;
          const arrow = parentBtn ? parentBtn.querySelector('.js-accordion-arrow') : null;
          
          this.expandAccordion(parentContent, arrow);
          if (parentBtn) {
            parentBtn.classList.add('text-blue-600');
          }
        } else {
          // 通常メニュー（HOME 等）のアクティブ表示
          activeLink.classList.remove('text-slate-800');
          activeLink.classList.add('text-blue-600', 'font-black');
          
          // アイコンがあればアイコンの色も追随
          const icon = activeLink.querySelector('i');
          if (icon) {
            icon.classList.remove('text-slate-300');
            icon.classList.add('text-blue-600');
          }
        }
      }
    }

    // Lucideアイコンの再描画（カスタムコンポーネント内を対象）
    if (typeof lucide !== 'undefined') {
      lucide.createIcons({ root: this });
    }
  }

  // アコーディオンを開くヘルパー
  expandAccordion(content, arrow) {
    if (!content) return;
    content.classList.remove('hidden');
    content.style.display = 'block';
    if (arrow) {
      arrow.style.transform = 'rotate(90deg)';
      arrow.classList.remove('text-slate-300');
      arrow.classList.add('text-blue-600');
    }
  }

  // アコーディオンを閉じるヘルパー
  collapseAccordion(content, arrow) {
    if (!content) return;
    content.classList.add('hidden');
    content.style.display = '';
    if (arrow) {
      arrow.style.transform = '';
      arrow.classList.remove('text-blue-600');
      arrow.classList.add('text-slate-300');
    }
  }
}

// 他のファイルの古い読み込みによる二重定義エラーを防ぐ
try {
  customElements.define('sidebar-component', SidebarComponent);
} catch (e) {
  console.warn('sidebar-componentは既に定義されています。');
}

// =========================================================================
// 全ページに会社のロゴ（ファビコン）を自動追加する命令
// =========================================================================
(function() {
  var faviconData = [
    { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: 'https://diamondhead.jp/assets/images/common/favicon/favicon.ico' },
    { rel: 'apple-touch-icon', type: 'image/png', href: 'https://diamondhead.jp/assets/images/common/favicon/apple-touch-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', href: 'https://diamondhead.jp/assets/images/common/favicon/icon-192x192.png' }
  ];

  faviconData.forEach(function(data) {
    var link = document.createElement('link');
    link.rel = data.rel;
    link.type = data.type;
    link.href = data.href;
    document.head.appendChild(link);
  });
})();
