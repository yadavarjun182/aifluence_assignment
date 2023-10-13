import './App.css';
function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <p>Sidebar</p>
        </div>
        <div className="main">
          <div className="topbar">
            <div className="topbox">
              <div className="single">
                <img src="/icon1.png" alt='icon' />
              </div>
              <div className="triple">
                <div>
                  <img src="/Notification.png" alt="notification" />
                </div>
                <div>
                  <img src="/Settings.png" alt="settings" />
                </div>
                <div>
                  <img src="/Profile.png" alt="Profile" />
                </div>
              </div>
            </div>
          </div>
          <div className="profilesec">
            <div className="profile_picture">
              <img src="/pic.png" alt="Profile" /> {/* Corrected the 'image' tag to 'img' */}
              <div className="officialbadge">
                <img src="/Vector.png" alt='badge' />
              </div>
            </div>
            <div className="details">
              <div className="namebar">
                <div>
                  <img src="/Zoe.png" alt='badge' />
                </div>
                <div className='threeicons'>
                  <div>  <img src="/Instagram.png" alt='badge' /></div>
                  <div>  <img src="/Twitter2.png" alt='badge' /></div>
                  <div>  <img src="/Facebook2.png" alt='badge' /></div>
                </div>
                <div className="citydetails">
                  <img src="/city.png" alt='badge' />
                </div>

              </div>
              <div className="profession">
                <div>
                  <img src="/oval.png" alt='badge' />
                </div>
                <div>
                  <img src="/Fashion.png" alt='badge' />
                </div>
              </div>
              <div className="summary">
                <div>
                  <img src="/IdentificationCard.png" alt='badge' />

                </div>
                <div>
                  <img src="/aboutme.png" alt='badge' />

                </div>

              </div>
              <div className="campaignbtn">
                <div>
                  <div>

                    <img src="/Buttons.png" alt='badge' />
                  </div>
                  <div>
                    <img src="/Buttons2.png" alt='badge' />

                  </div>

                </div>
                <div>
                  <div>
                    <img src="/Medal.png" alt='badge' />
                  </div>
                  <div className='excel'>
                    <img src="Buttons3.png" alt='badge' />
                    <div className='excel2'>

                      <img src="Excellent.png" alt='badge' />
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
          <div className="statstab">
            <div className="statscard">
              <div className="boxheading">INFLUENCE</div>
              <div className="statscardpercent">88<span className="total">/100</span></div>
              <div className="tweetfacebox">
                <div>
                  <img src="/twitter.png" alt='badge' />
                </div>
                <div>
                  <img src="/facebook.png" alt='badge' />
                </div>
              </div>
            </div>
            <div className="statscard">
              <div className="boxheading">ENGAGEMENT</div>
            </div>
            <div className="statscard3">
              <div className="boxheading">INSIGHTS</div>
            </div>
          </div>
          <div className="socialiconstab">
            <div className="iconsbox">
              <div className="socialogo">
                <img src="/icons3.png" alt='badge' />
              </div>
              <div className="socialogo">
                <img src="/icons4.png" alt='badge' />
              </div>
              <div className="socialogo">
                <img src="/icons5.png" alt='badge' />
              </div>
            </div>



          </div>
          <div className="titlestab">
            <div>OVERVIEW</div>
            <div>AUDIENCE</div>
            <div>CONTENT</div>
            <div>MANAGE</div>
          </div>
          <div className="followers_container">
            <div>
              <div className="boxheading">INSIGHTS</div>
              <div className="insightspercent">4.5%</div>
              <div className="roundedbtn">
                <div>Avg Views: 3.3k </div>
                <div>Avg Comments: 9 </div>
                <div>Avg Likes: 213 </div>

              </div>

              <div className="roundedbtn2">

                <div>Avg Views: 3.3k </div>
                <div>Avg Views: 3.3k </div>
              </div>




            </div>
            <div>
              {" "}
              <div className="boxheading movetocenter">FOLLOWERS CREDIBILITY</div>
              <div className="insightspercent2">83.64%</div>
            </div>
            <div>
              <div className="boxheading">BRAND AFFINITY</div>
              <div className="streamingicons">
                <div className="logo">
                  <img src="/bmw.png" alt='badge' />
                </div>
                <div className="logoname">BMW</div>
                <div className="logo">
                  <img src="/netflix.png" alt='badge' />
                </div>
                <div className="logoname">NETFLIX</div>
                <div className="logo">
                  <img src="/american_express.png" alt='badge' />
                </div>
                <div className="logoname">Amex</div>
                <div className="logo">
                  <img src="/playstation.png" alt='badge' />
                </div>
                <div className="logoname">Playstation</div>
              </div>
            </div>
          </div>
          <div className="posts_container">
            <div>
              <div className="boxheading">INFLUENCER INTEREST</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
            </div>
            <div>
              <div className="boxheading">POST TOPICS</div>
              <div className="boxcontent">raghudixit</div>
              <div className="boxcontent">bangalore</div>
              <div className="boxcontent">gokarnabeach</div>
              <div className="boxcontent">magictrics</div>
              <div className="boxcontent">legomovie</div>
            </div>
            <div>
              <div className="boxheading">POST TOPICS</div>
              <div className="boxcontent">raghudixit</div>
              <div className="boxcontent">bangalore</div>
              <div className="boxcontent">gokarnabeach</div>
              <div className="boxcontent">magictrics</div>
              <div className="boxcontent">legomovie</div>
            </div>
          </div>
          <div className="audienceheading">AUDIENCE</div>
          <div className="audiencebox">
            <div>
              <div className="boxheading">REACHABILITY</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
              <div className="boxcontent">friends, family and relationships</div>
            </div>
            <div>
              <div className="boxheading">REACHABILITY</div>
              <div className="bargraphbox">
                <div className="bar-graph">
                  <div className="bar-graph-filled"></div> {/* Filled (e.g., 70%) */}
                  <div className="bar-graph-empty"></div> {/* Empty (e.g., 30%) */}
                </div>
              </div>
            </div>
            <div>
              <div className="boxheading">GENDER DISTRIBUTION</div>

            </div>
          </div>
          <div className="audienceheading">CONTENT</div>
        </div>
      </div>
    </>
  );
}

export default App;
