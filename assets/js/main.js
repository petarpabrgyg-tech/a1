// Cambric Panache Haute Couture Interactions
document.addEventListener('DOMContentLoaded', () => {
    const drawerToggle = document.getElementById('drawer-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (drawerToggle && mobileDrawer) {
        drawerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDrawer.classList.toggle('active');
            drawerToggle.innerHTML = mobileDrawer.classList.contains('active') ? '&times;' : '&#9776;';
        });

        document.addEventListener('click', (e) => {
            if (!mobileDrawer.contains(e.target) && e.target !== drawerToggle) {
                mobileDrawer.classList.remove('active');
                drawerToggle.innerHTML = '&#9776;';
            }
        });
    }
});
