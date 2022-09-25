/* eslint-disable @next/next/no-img-element */

const activites = [
  'Theater',
  'Dance',
  'Music',
  'Literary',
  'Gaming',
  'Arts',
  'Photogrphy',
  'Lifestyle',
  'Fun',
];

const Main = () => {
  return (
    <div className="o-scroll" id="js-scroll" data-scroll-container>
      <div
        data-scroll-section
        style={{
          background:
            'url(https://odyssey.iiitd.edu.in/static/images/background.png)',
        }}
      >
        <div className="o-container">
          <header className="c-header" id="header">
            <h1 className="c-header_title o-h1" data-scroll>
              <span className="c-header_title_line">
                <span
                  data-scroll
                  data-scroll-speed={3}
                  data-scroll-position="top"
                  className="retro"
                >
                  Retro
                </span>
              </span>
              <span className="c-header_title_line">
                <span
                  data-scroll
                  data-scroll-speed={2}
                  data-scroll-position="top"
                  className="rewind"
                >
                  Rewind
                </span>
              </span>
              <span className="c-header_title_line -version recreate ">
                <span
                  className="o-h1"
                  data-scroll
                  data-scroll-speed={3}
                  data-scroll-position="top"
                  data-scroll-delay="0.05"
                >
                  Re
                </span>
                <span
                  className="o-h1"
                  data-scroll
                  data-scroll-speed={5}
                  data-scroll-position="top"
                  data-scroll-delay="0.05"
                >
                  cr
                </span>
                <span
                  className="o-h1"
                  data-scroll
                  data-scroll-speed={2}
                  data-scroll-position="top"
                  data-scroll-delay="0.05"
                >
                  ea
                </span>
                <span
                  className="o-h1"
                  data-scroll
                  data-scroll-speed={4}
                  data-scroll-position="top"
                  data-scroll-delay="0.05"
                >
                  te
                </span>
              </span>
            </h1>
            <hr
              className="c-header_line"
              data-scroll
              data-scroll-offset={100}
            />
            <a
              className="c-header_logo"
              href="https://locomotive.ca"
              target="_blank"
            >
              <svg role="img">
                <use xlinkHref="dist/images/sprite.svg#logo" />
              </svg>
            </a>
          </header>
        </div>
      </div>

      <section data-scroll-section>
        <div className="o-container">
          <div className="c-summary" data-scroll>
            <div className="o-layout -gutter">
              <div className="o-layout_item u-2/5@from-medium">
                <p className="c-summary_text">
                  <img
                    src="https://odyssey.iiitd.edu.in/static/images/about.png"
                    alt="about"
                  />
                </p>
              </div>
              <div className="o-layout_item u-3/5@from-medium">
                <p>
                  IIIT Delhi's Odyssey celebrates the essence and beauty of
                  culture and of it's arts. It celebrates the Actor, the Dancer,
                  the Musician, the Writer and the Designer, with over 45 events
                  and a footfall of 25,000+. Having staged popular performances
                  like Prateek Kuhad, Gajendra Verma, Hardy Sandhu, The Local
                  Train, Euphoria, Zakir Khan and Bhuvan Bam, Odyssey always
                  reaches out to the youth with it's inspiring, ever growing
                  attitude.
                </p>

                <p style={{ marginTop: '30px' }}>
                  Feel the adrenaline rush, the pumping of you blood as We bring
                  to you yet another spectacular edition of the 2 day event.
                  Come participate, experience and feel the excitement as you
                  watch the star with close proximity or see the different
                  competitions. Come and make numerous and unforgettable
                  memories and at Odyssey.
                </p>

                <p style={{ marginTop: '30px' }}>
                  And this year as we together walk down the campus, let's all
                  add to the symphony of memories we've built here. Come join us
                  in our pursuit of cherishing an interlude of eras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="c-section" data-scroll-section>
        <div className="o-container" id="scroll-direction">
          <div className="c-direction-block_wrapper">
            <div
              className="c-section_infos -padding"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#scroll-direction"
            >
              <div className="c-section_infos_inner" data-scroll>
                <h3>It's not your regular fest</h3>
                <div className="c-sections_infos_text u-text">
                  <p>
                    Cheer up and get ready to be a part of the most awaited fest
                    of the year. Odyssey is back with a bang and this time it's
                    going to be bigger and better than ever before.
                  </p>
                </div>
              </div>
            </div>
            <div className="c-direction-block" id="direction">
              <div className="c-direction-block_item -one">
                <span
                  className="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={6}
                  data-scroll-target="#direction"
                >
                  It's not your regular fest
                </span>
              </div>
              <div className="c-direction-block_item -two">
                <span
                  className="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={-8}
                  data-scroll-target="#direction"
                >
                  Odyssesy is back with a bang
                </span>
              </div>
              <div className="c-direction-block_item -three">
                <span
                  className="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={9}
                  data-scroll-target="#direction"
                  data-scroll-delay="0.05"
                >
                  Let's make it bigger and better
                </span>
              </div>
              <div className="c-direction-block_item -four">
                <span
                  className="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={15}
                  data-scroll-target="#direction"
                >
                  Let's fuckinnnn goooooo
                </span>
              </div>
              <div className="c-direction-block_item -five">
                <span
                  className="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={-20}
                  data-scroll-target="#direction"
                  data-scroll-delay="0.05"
                >
                  Ok, enough!!!!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="c-section" data-scroll-section>
        <div className="o-container" id="lerp-effect">
          <div className="o-layout">
            <div className="o-layout_item u-2/5@from-medium">
              <div className="c-section_infos" data-scroll>
                <div
                  className="c-section_infos_inner"
                  data-scroll
                  data-scroll-offset={200}
                >
                  <h3>What's in for you?</h3>
                  <div className="c-sections_infos_text u-text">
                    <p>
                      Odyssey is a 2 day long fest with over 45 events and a
                      footfall of 25,000+. It is a platform for the youth to
                      showcase their talent and to experience the best of
                      everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="o-layout_item u-3/5@from-medium">
              {activites.map((activity, index) => (
                <div key={activity} className="c-lerp-block">
                  <span
                    className="c-lerp-block_index"
                    data-scroll
                    data-scroll-delay="0.2"
                    data-scroll-speed={6}
                    data-scroll-call="dynamicColor"
                    data-scroll-repeat
                  >
                    0{index + 1}
                  </span>
                  <span
                    className="c-lerp-block_title"
                    data-scroll
                    data-scroll-delay="0.6"
                    data-scroll-speed={6}
                  >
                    <span>{activity}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="c-section" data-scroll-section>
        <div className="o-container">
          <div className="c-cta">
            <h1 className="o-title" data-scroll>
              <span className="o-title_line">
                <span>What are</span>
              </span>
              <span className="o-title_line">
                <span>you waiting</span>
              </span>
              <span className="o-title_line u-white">
                <span>for?</span>
              </span>
            </h1>
            <hr className="c-cta_line" data-scroll data-scroll-offset={100} />
            <div className="c-cta_content">
              <div className="o-layout -gutter">
                <div className="o-layout_item u-2/5@from-medium">
                  <p className="u-label">Register</p>
                </div>
                <div className="o-layout_item u-3/5@from-medium">
                  <div className="c-cta_section">
                    <div
                      className="c-cta_content_text"
                      data-scroll
                      data-scroll-offset={100}
                    >
                      <h3>Register here to attend the night!</h3>
                      <p>Entry is free, all you need to do is:</p>
                      <ul>
                        <li>- Bring a Valid College/organisation ID</li>
                        <li>- Register at link above</li>
                        <li>
                          - Follow us at instagram and like us on facebook
                        </li>
                      </ul>
                    </div>
                    <a
                      className="c-cta_button o-button"
                      href="https://bit.ly/NirvanaNight"
                      target="_blank"
                      data-scroll
                      data-scroll-offset={100}
                      rel="noreferrer"
                    >
                      Link
                      <span className="o-button_arrow u-icon">→</span>
                    </a>
                  </div>
                  <hr
                    className="c-cta_line -margin"
                    data-scroll
                    data-scroll-offset={100}
                  />
                  <div className="c-cta_section">
                    <div
                      className="c-cta_content_text"
                      data-scroll
                      data-scroll-offset={100}
                    >
                      <h4>
                        Rahul Bansal <br />
                        rahul20457@iiitd.ac.in
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div className="c-choochoo">
          <div
            className="c-choochoo_item u-text-center"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={10}
          >
            <span>🚂</span>
          </div>
          <div
            className="c-choochoo_item u-text-center -reverse"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={-10}
          >
            <span>🚂</span>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div className="o-container">
          <div className="c-damn">
            <h1 className="o-title" data-scroll>
              <span className="o-title_line">
                <span>Damn You</span>
              </span>
              <span className="o-title_line">
                <span>really like</span>
              </span>
              <span className="o-title_line  u-white">
                <span>to scroll</span>
              </span>
              <span className="o-title_line register-now">
                <span>Go register now</span>
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
