export const useLayout = () => {
  /**
   * @param {Number} scrollY
   */
  const getMobileNavData = scrollY => {
    const navHeaderEl = document.querySelector('.nav-header-mobile');
    const navHeaderElHeight = navHeaderEl?.getBoundingClientRect().height || 0;

    const navToolsEl = document.querySelector('#nav-link-pills-menu');
    const navToolsElHeight = navToolsEl?.getBoundingClientRect().height || 0;

    const contentTop = navHeaderElHeight - navToolsElHeight + 5;
    const isHeaderHidden = scrollY >= contentTop;

    return { navHeaderElHeight, navToolsElHeight, contentTop, isHeaderHidden };
  };

  return {
    getMobileNavData,
  };
};
