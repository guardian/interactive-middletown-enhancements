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
          console.log('hello json');
          console.log(data);
      }
  });



  // timeout prevents a flash of unstyled elements
  setTimeout(function() {
    var textBody = document.querySelector('.content__article-body');
    var headlineContainer = document.querySelector('.explore-series-headline .content__main-column');


    var atomItem = document.createElement("div");
    atomItem.classList.add('sidebar-atom');
    atomItem.innerHTML = "<div class='text'><p><strong>The view from Middletown</strong>In this twice-weekly series ahead of the presidential election, Gary Younge spends a month in the mid-western town of Muncie, Indiana – traditionally viewed as emblematic of middle America. He’ll ask how this small town is dealing with this big moment, and what we can learn about the electorate’s view of the political class from citizens here, who voted for both Donald Trump and Bernie Sanders in the primaries. Gary is interested in what people might think, not just how they vote – and invites you to contribute to, guide and help shape this series.</p><a class='panel' href=''>Learn more about this series</a><a class='link' href='https://membership.theguardian.com/'>Support our journalism. Become a Member</a></div>";

    var linkItem = document.createElement("a");
    // add link https://viewer.gutools.co.uk/proxy/preview/membership/2016/oct/10/middletown-america-what-issues-will-decide-the-election#noads
    linkItem.classList.add('sidebar-issues');
    linkItem.innerHTML = 'The view from Middletown<br>How you can get involved with this project';

    var seriesPageItem = document.createElement("div");
    seriesPageItem.classList.add('series-page-link');
    seriesPageItem.innerHTML = "<div class='part'><strong>Part 1</strong> of a 9 part series</div><div class='why'>Why are we covering this?</div><a class='get-involved' href='https://viewer.gutools.co.uk/proxy/preview/membership/2016/oct/10/middletown-america-what-issues-will-decide-the-election#noads'>Get involved with this project</a>";

    var overlayItem = document.createElement("div");
    overlayItem.classList.add('sidebar-overlay');
    overlayItem.innerHTML = "<div class='sidebar-overlay__overlay'></div><div class='sidebar-overlay__page'><iframe class='series-page' src='https://preview.gutools.co.uk/membership/ng-interactive/2016/oct/10/the-view-from-middletown-why-are-we-covering-this-strory#noads'></iframe></div>";

    // to-do update with spreadsheet text
    var newsletterItem = document.createElement("div");
    newsletterItem.classList.add('boot_newsletter');
    newsletterItem.innerHTML = "<h5>Coming on Thursday 13 November</h5><p>Gary will ipsum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><form method='post' novalidate action='https://guardiannewsampampmedia.formstack.com/forms/index.php' class='fsForm fsSingleColumn fsMaxCol1' id='fsForm2490271'><input type='hidden' name='form' value='2490271' /><input type='hidden' name='viewkey' value='tOfqZ3Kxj2' /><input type='hidden' name='password' value='' /><input type='hidden' name='hidden_fields' id='hidden_fields2490271' value='' /><input type='hidden' name='fspublicsession' id='session_id2490271' value='' /><input type='hidden' name='incomplete' id='incomplete2490271' value='' /><input type='hidden' name='incomplete_email' id='incomplete_email2490271' value='' /><input type='hidden' name='incomplete_password' id='incomplete_password2490271' /><input type='hidden' name='referrer' id='referrer2490271' value='' /><input type='hidden' name='referrer_type' id='referrer_type2490271' value='link' /><input type='hidden' name='_submit' value='1' /><input type='hidden' name='style_version' value='3' /><input type='hidden' id='fsLatitude' name='latitude' value='' /><input type='hidden' id='fsLongitude' name='longitude' value='' /><input type='hidden' id='viewparam' name='viewparam' value='551498' /><input type='hidden' id='analytics' name='analytics' value='' /><input type='hidden' id='fsSaveResumePassword2490271' value='1' /><label id='label46135110' class='fsLabel fsRequiredLabel' for='field46135110'>Sign up for an email alert when new articles are published</label><input type='email' placeholder='Your email' id='field46135110' name='field46135110' required='required' value='' class='fsField fsFormatEmail fsRequired' aria-required='true' /><input id='fsSubmitButton2490271' class='fsSubmitButton' type='submit' value='Subscribe' data-link-name='middletown : newsletter sign up' /></form>";




    headlineContainer.appendChild(seriesPageItem);
    textBody.insertBefore(linkItem, textBody.childNodes[29]);
    textBody.insertBefore(atomItem, textBody.childNodes[4]);
    textBody.insertBefore(overlayItem, textBody.childNodes[0]);

    textBody.insertBefore(newsletterItem, textBody.childNodes[textBody.childNodes.length]);


    document.querySelector('.series-page-link .why').onclick = function() {
      document.querySelector('body').classList.add('series-page-overlay-on');
    }
    document.querySelector('.sidebar-atom .panel').onclick = function(e) {
      e.preventDefault();
      document.querySelector('body').classList.add('series-page-overlay-on');
    }

    document.querySelector('.sidebar-overlay__overlay').onclick = function() {
      document.querySelector('body').classList.remove('series-page-overlay-on');
    }

    document.querySelector('.sidebar-overlay__close').onclick = function() {
      document.querySelector('body').classList.remove('series-page-overlay-on');
    }

  }, 100);



}
