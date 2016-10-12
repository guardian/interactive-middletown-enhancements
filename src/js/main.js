import reqwest from 'reqwest'
import mainHTML from './text/main.html!text'
import share from './lib/share'

var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
var el;
var data;

export function init(dom, context, config, mediator) {


  var data;
  var url = "https://interactive.guim.co.uk/docsdata-test/1jct3UKEcoJjKk1TQcYYt-3pidDHaMJiF3LIgPCvspSE.json";
  reqwest({
      url: url,
      type: 'json',
      crossOrigin: true,
      success: function(resp) {
          data = resp;
          // console.log('hello json');
          // console.log(data);
      }
  });


  // Check if this is the callout page
  if (window.location.href.indexOf('us-election-gary-younge-muncie-indiana')>0) {
    var isCalloutPage = true;
  } else {
    var isCalloutPage = false;
  }



  // timeout prevents a flash of unstyled elements
  setTimeout(function() {
    var textBody = document.querySelector('.content__article-body');
    var headlineContainer = document.querySelector('.explore-series-headline .content__main-column');


    var atomItem = document.createElement("div");
    atomItem.classList.add('sidebar-atom');
    atomItem.innerHTML = "<div class='text'><p><strong>The view from Middletown</strong>In this twice-weekly series ahead of the presidential election, Gary Younge spends a month in the mid-western town of Muncie, Indiana –  known as Middletown and traditionally viewed as emblematic of middle America. He’ll ask how this small town is dealing with this big moment, and what we can learn about the electorate’s view of the political class from citizens here, who voted for both Donald Trump and Bernie Sanders in the primaries. Gary is interested in what people might think, not just how they vote – and invites you to contribute to, guide and help shape this series.</p><span class='panel' data-link-name='middletown : learn more about this series'>Learn more about this series</a><a class='link' href='https://membership.theguardian.com/' data-link-name='middletown : become a member'>Support our journalism. Become a Member</span></div>";

    var linkItem = document.createElement("a");
    linkItem.classList.add('sidebar-issues');
    linkItem.setAttribute('data-link-name', 'middletown : sidebar callout link');
    linkItem.setAttribute('href', 'https://www.theguardian.com/membership/2016/oct/11/us-election-gary-younge-muncie-indiana');
    linkItem.innerHTML = 'The view from Middletown<br>How you can get involved with this project';

    var seriesPageItem = document.createElement("div");
    seriesPageItem.classList.add('series-page-link');
    seriesPageItem.innerHTML = "<div class='part'><strong>Part 1</strong> of a 9 part series</div><div class='why' data-link-name='middletown : why are we covering this'>Why are we covering this?</div><a class='get-involved' href='https://www.theguardian.com/membership/2016/oct/11/us-election-gary-younge-muncie-indiana' data-link-name='middletown : get involved with this project'>Get involved with this project</a>";

    var overlayItem = document.createElement("div");
    overlayItem.classList.add('sidebar-overlay');
    overlayItem.innerHTML = "<div class='sidebar-overlay__overlay'></div><div class='sidebar-overlay__close'><svg width='42' height='42' viewBox='498 -4 42 42' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd' transform='translate(498 -4)'><circle fill='#FFF' cx='21' cy='21' r='21'/><path fill='#00456E' d='M21.02 23.04l8.7 7.96L31 29.7 23.06 21 31 12.3 29.7 11l-8.68 7.96-8.73-7.93-1.3 1.3L18.96 21 11 29.68l1.3 1.3'/></g></svg></div><div class='sidebar-overlay__page'><iframe class='series-page' src='https://www.theguardian.com/membership/ng-interactive/2016/oct/11/view-middletown-gary-younge-us-presidential-election?mode=sidebar'></iframe></div>";

    // to-do update with spreadsheet text
    var newsletterItem = document.createElement("div");
    newsletterItem.classList.add('boot_newsletter');
    newsletterItem.innerHTML = "<h5>Coming on Thursday 13 October</h5><p>I'll share my first impressions of Muncie, and the political and societal divides in the town, having arrived as the second presidential debate aired. Do get in touch with your views.</p><form method='post' novalidate action='https://guardiannewsampampmedia.formstack.com/forms/index.php' class='fsForm fsSingleColumn fsMaxCol1' id='fsForm2490271'><input type='hidden' name='form' value='2490271' /><input type='hidden' name='viewkey' value='tOfqZ3Kxj2' /><input type='hidden' name='password' value='' /><input type='hidden' name='hidden_fields' id='hidden_fields2490271' value='' /><input type='hidden' name='fspublicsession' id='session_id2490271' value='' /><input type='hidden' name='incomplete' id='incomplete2490271' value='' /><input type='hidden' name='incomplete_email' id='incomplete_email2490271' value='' /><input type='hidden' name='incomplete_password' id='incomplete_password2490271' /><input type='hidden' name='referrer' id='referrer2490271' value='' /><input type='hidden' name='referrer_type' id='referrer_type2490271' value='link' /><input type='hidden' name='_submit' value='1' /><input type='hidden' name='style_version' value='3' /><input type='hidden' id='fsLatitude' name='latitude' value='' /><input type='hidden' id='fsLongitude' name='longitude' value='' /><input type='hidden' id='viewparam' name='viewparam' value='551498' /><input type='hidden' id='analytics' name='analytics' value='' /><input type='hidden' id='fsSaveResumePassword2490271' value='1' /><label id='label46135110' class='fsLabel fsRequiredLabel' for='field46135110'>Sign up for an email alert when new articles are published</label><input type='email' placeholder='Your email' id='field46135110' name='field46135110' required='required' value='' class='fsField fsFormatEmail fsRequired' aria-required='true' /><div class='marketing'><input type='checkbox' id='field46329861_1' name='field46329861[]' value='I'd also like to receive the latest updates and offers from the Guardian' checked='checked' class='fsField vertical' data-link-name='middletown : newsletter checkbox'><label class='fsOptionLabel vertical' for='field46329861_1'  data-link-name='middletown : newsletter checkbox text'>I'd also like to receive the latest updates and offers from the Guardian</label><p>By proceeding, you agree to the Guardian's <a href='https://www.theguardian.com/help/terms-of-service'>Terms of Service</a> &amp; <a href='https://www.theguardian.com/info/privacy'>Privacy Policy</a>.</p></div><input id='fsSubmitButton2490271' class='fsSubmitButton' type='submit' value='Subscribe' data-link-name='middletown : newsletter sign up in-article' /></form>";


    if (!isCalloutPage) {
      textBody.insertBefore(atomItem, textBody.childNodes[4]);
      textBody.insertBefore(newsletterItem, textBody.childNodes[textBody.childNodes.length]);
      headlineContainer.appendChild(seriesPageItem);
      textBody.insertBefore(overlayItem, textBody.childNodes[0]);
      textBody.insertBefore(linkItem, textBody.childNodes[20]);

      document.querySelector('.content__standfirst--explore').classList.add('quote');
    }


    [].forEach.call(document.querySelectorAll('.content__series-label__link'), function(link) {
      link.setAttribute('href', 'https://www.theguardian.com/membership/ng-interactive/2016/oct/11/view-middletown-gary-younge-us-presidential-election');
      link.setAttribute('data-link-name', 'middletown : top left logo');
    });

    // needs testing
    // var openSidepanelAll = document.querySelectorAll('[data-open-sidepanel]');
    // [].forEach.call(openSidepanelAll, function(openSidepanel) {
    //   openSidepanel.onclick = function() {
    //     if (is_touch_device()) {
    //       window.location = 'https://www.theguardian.com/membership/ng-interactive/2016/oct/11/view-middletown-gary-younge-us-presidential-election';
    //     } else {
    //       document.querySelector('body').classList.add('series-page-overlay-on');
    //     }
    //   }
    // });
    //
    // var closeSidepanelAll = document.querySelectorAll('[data-close-sidepanel]');
    // [].forEach.call(closeSidepanelAll, function(closeSidepanel) {
    //   closeSidepanel.onclick = function() {
    //     document.querySelector('body').classList.remove('series-page-overlay-on');
    //   }
    // });


    // delete from here:

    document.querySelector('.series-page-link .why').onclick = function() {
      if (is_touch_device()) {
        window.location = 'https://www.theguardian.com/membership/ng-interactive/2016/oct/11/view-middletown-gary-younge-us-presidential-election';
      } else {
        document.querySelector('body').classList.add('series-page-overlay-on');
      }
    }
    document.querySelector('.sidebar-atom .panel').onclick = function(e) {
      e.preventDefault();
      if (is_touch_device()) {
        window.location = 'https://www.theguardian.com/membership/ng-interactive/2016/oct/11/view-middletown-gary-younge-us-presidential-election';
      } else {
        document.querySelector('body').classList.add('series-page-overlay-on');
      }
    }

    document.querySelector('.sidebar-overlay__overlay').onclick = function() {
      document.querySelector('body').classList.remove('series-page-overlay-on');
    }

    document.querySelector('.sidebar-overlay__close').onclick = function() {
      document.querySelector('body').classList.remove('series-page-overlay-on');
    }

    // delete until here --

  }, 100);


  function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
  };


}
