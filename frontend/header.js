// header.js - Reusable Header Component
class HiveHeader {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.user = null;
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "dashboard";
    return page;
  }

  render(containerSelector = "body") {
    const headerHTML = `
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <!-- Logo -->
            <a href="dashboard.html" class="logo-nav-link ${this.currentPage === "dashboard" ? "active" : ""}">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <!-- Bee Logo -->
                  <img src="../assets/bee-logo.png" alt="bee logo" />
                </div>
                <div>
                  <h1 class="text-xl font-bold text-slate-800">Hive Network</h1>
                  <p class="text-xs text-gray-500 hidden lg:block">Saint George Chapter</p>
                </div>
              </div>
            </a>

            <!-- Navigation -->
            <nav class="hidden md:flex">
              <a href="dashboard.html" class="nav-link ${this.currentPage === "dashboard" ? "active" : ""}">
                <i class="fas fa-chart-bar"></i>
                Dashboard
              </a>
              <a href="directory.html" class="nav-link ${this.currentPage === "directory" ? "active" : ""}">
                <i class="fas fa-users"></i>
                Directory
              </a>
              <a href="referrals.html" class="nav-link ${this.currentPage === "referrals" ? "active" : ""}">
                <i class="fas fa-gift"></i>
                Referrals
              </a>
              <a href="meetings.html" class="nav-link ${this.currentPage === "meetings" ? "active" : ""}">
                <i class="fas fa-calendar"></i>
                Meetings
              </a>
            </nav>

            <!-- User Menu Desktop -->
            <div class="hidden lg:flex items-center space-x-4">
              <div class="flex items-center space-x-3">
                <div id="user-avatar" class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-medium text-sm">JS</span>
                </div>
                <div class="hidden xl:block text-left">
                  <p id="user-name" class="text-sm font-medium text-slate-900">John Smith</p>
                  <p id="user-business" class="text-xs text-gray-500">Elite Fitness Studio</p>
                </div>
                <button onclick="hiveHeader.logout()" class="text-gray-600 hover:text-slate-900 p-2 transition-colors" title="Logout">
                  <i class="fas fa-sign-out-alt"></i>
                </button>
              </div>
            </div>

            <!-- Mobile/Tablet Menu - Only shows below large screens -->
            <div class="lg:hidden flex items-center space-x-2">
              <button class="relative p-2 text-gray-600 hover:text-slate-900 rounded-lg transition-colors">
                <i class="fas fa-bell text-lg"></i>
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-xs">2</span>
              </button>
              <div id="user-avatar-mobile" class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <span class="text-white font-medium text-sm">JS</span>
              </div>
              <button id="mobile-menu-button" class="p-2 text-gray-600 hover:text-slate-900 rounded-lg transition-colors ml-2">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-gray-200">
          <div class="px-4 py-2 space-y-1">
            <!-- Mobile User Info -->
            <div class="flex items-center space-x-3 px-3 py-3 border-b border-gray-100">
              <div id="user-avatar-mobile-menu" class="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <span class="text-white font-medium text-sm">JS</span>
              </div>
              <div class="flex-1">
                <p id="user-name-mobile" class="text-sm font-medium text-slate-900">John Smith</p>
                <p id="user-business-mobile" class="text-xs text-gray-500">Elite Fitness Studio</p>
              </div>
            </div>
            
            <!-- Mobile Navigation Links -->
            <a href="dashboard.html" class="mobile-nav-link ${this.currentPage === "dashboard" ? "active" : ""}">
              <i class="fas fa-chart-bar"></i>
              <span>Dashboard</span>
            </a>
            <a href="directory.html" class="mobile-nav-link ${this.currentPage === "directory" ? "active" : ""}">
              <i class="fas fa-users"></i>
              <span>Directory</span>
            </a>
            <a href="referrals.html" class="mobile-nav-link ${this.currentPage === "referrals" ? "active" : ""}">
              <i class="fas fa-gift"></i>
              <span>Referrals</span>
            </a>
            <a href="meetings.html" class="mobile-nav-link ${this.currentPage === "meetings" ? "active" : ""}">
              <i class="fas fa-calendar"></i>
              <span>Meetings</span>
            </a>
            
            <!-- Mobile Logout -->
            <button onclick="hiveHeader.logout()" class="mobile-nav-link w-full text-left border-t border-gray-100 mt-2 pt-2">
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>
    `;

    // Insert header at the beginning of the container
    const container = document.querySelector(containerSelector);
    if (container) {
      container.insertAdjacentHTML("afterbegin", headerHTML);
      this.attachEventListeners();
    }
  }

  attachEventListeners() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden");
        if (isHidden) {
          mobileMenu.classList.remove("hidden");
          mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
        } else {
          mobileMenu.classList.add("hidden");
          mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
      });
    }

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenu) {
          mobileMenu.classList.add("hidden");
          if (mobileMenuButton) {
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
          }
        }
      });
    });

    const enforceResponsiveSwitch = () => {
      const desktopNav = document.querySelector('nav[class*="hidden"][class*="lg:flex"]');
      const desktopUserMenu = document.querySelector(".hidden.lg\\:flex");
      const mobileContainer = document.querySelector(".lg\\:hidden");

      if (window.innerWidth >= 1024) {
        // Desktop mode
        if (desktopNav) {
          desktopNav.style.display = "flex";
        }
        if (desktopUserMenu) {
          desktopUserMenu.style.display = "flex";
        }
        if (mobileContainer) {
          mobileContainer.style.display = "none";
        }
        if (mobileMenu) {
          mobileMenu.classList.add("hidden");
          // Don't set display: none - let CSS handle it
        }
        if (mobileMenuButton) {
          mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
      } else {
        // Mobile mode
        if (desktopNav) {
          desktopNav.style.display = "none";
        }
        if (desktopUserMenu) {
          desktopUserMenu.style.display = "none";
        }
        if (mobileContainer) {
          mobileContainer.style.display = "flex";
        }
        // Don't force mobile menu display - let the toggle handle it
      }
    };
    // Run on load and resize
    enforceResponsiveSwitch();
    window.addEventListener("resize", enforceResponsiveSwitch);
  }

  updateUserInfo(user) {
    this.user = user;
    const userName = user.displayName || user.email.split("@")[0];
    const userEmail = user.email; // Add this line
    const userInitials = userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    // Update desktop user info
    const userNameElement = document.getElementById("user-name");
    const userAvatarElement = document.getElementById("user-avatar");

    if (userNameElement) {
      userNameElement.textContent = userName;
      // Optional: Show email on hover or as subtitle
      userNameElement.title = userEmail;
    }

    if (userAvatarElement) {
      userAvatarElement.innerHTML = `<span class="text-white font-medium text-sm">${userInitials}</span>`;
    }

    // Update mobile user info
    const userNameMobileElement = document.getElementById("user-name-mobile");
    const userAvatarMobileElement = document.getElementById("user-avatar-mobile");
    const userAvatarMobileMenuElement = document.getElementById("user-avatar-mobile-menu");

    if (userNameMobileElement) {
      userNameMobileElement.textContent = userName;
      userNameMobileElement.title = userEmail;
    }

    if (userAvatarMobileElement) {
      userAvatarMobileElement.innerHTML = `<span class="text-white font-medium text-sm">${userInitials}</span>`;
    }

    if (userAvatarMobileMenuElement) {
      userAvatarMobileMenuElement.innerHTML = `<span class="text-white font-medium text-sm">${userInitials}</span>`;
    }
  }

  logout() {
    if (typeof firebase !== "undefined" && firebase.auth) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          sessionStorage.clear();
          window.location.href = "../../index.html";
        });
    } else {
      // Fallback if Firebase is not available
      sessionStorage.clear();
      window.location.href = "index.html";
    }
  }
}

// Create global instance
const hiveHeader = new HiveHeader();

// Auto-initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  hiveHeader.render();
});
