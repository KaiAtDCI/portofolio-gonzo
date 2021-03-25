    # jQuery
    get css attribute: $(selector).css.('propertyName')
    set css-attribute: $(selector).css("propertyName", "value");


    # snippets
    let selectedSectionID = null;

    const init = function(sectionId) {
      hideAllSections();
      showSection(sectionId);
    };

    const hideAllSections = function() {
      $("section").hide();
    }

    const hideSection = function(sectionID) {
      $("#sectionId").hide();
    }

    const showSection = function (newSectionId) {
      $("#" + newSectionId).removeClass('isActive');
      $("#" + newSectionId).hide();

      selectedSectionID = newSectionId;
      $("#" + newSectionId).show();
      $("#" + newSectionId).addClass('isActive');
    }


    # vanilla: create element and substitute child
    const pageItemContent = document.getElementById('page-item-content').firstChild;
    const newPageItemContent = document.createElement('h1');
    newPageItemContent.innerHTML = 'Test';
    pageItemContent.parentNode.replaceChild(newPageItemContent, pageItemContent);
