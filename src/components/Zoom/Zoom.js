import React, { Component } from 'react';
import { postData } from '../../api/Api';
import cx from 'classnames';

class Zoom extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick =  async (alertData) => {
    const response = await postData('getAlert', {
      alertMessage: alertData
    });
    if(response.success === true){
      alert(response.data);
    } else{
      alert(response.message)
    }
  }
  render() {
      return (
        <div className={cx("container-fluid body-fullheight")}>
         <div className={cx("row h-100")}>
          <div className={cx("video-section d-flex flex-column p-0")}>
            <div className={cx("notification")}>
              <div className={cx("notification-body d-flex")}>
                <img src="image/alert.svg" alt="" />
                <div className={cx("notification-detail ml-3 pt-2 pr-3")}>
                  <p className={cx("mb-1")}>Would you like to request for an extension for 5 mins more ?</p>
                  <div className={cx("d-flex")}>
                    <div className={cx("text-warning mr-3")}> Request Extension</div>
                    <div className={cx("text-muted")}> Dismiss</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("top-banner px-3 d-flex justify-content-between align-items-center bg-white")} style={{height: '60px', overflowY: 'hidden'}}>
              <img className={cx("logo p-3")} src="image/duphat.png" alt="" />
              <div className={cx("countdown-timer")}>
                <h6 className={cx("text-center mr-2 text-danger")}>
                  <small>Ends in</small> <br />
                  <span className={cx("count-down-time")}>26:00</span>
                </h6>
              </div>
            </div>
            <div className={cx("speaker-area d-flex justify-content-center align-items-center flex-column flex-1")}>
              <img className={cx("mb-4")} src="image/User-Holder.png" alt="" />
              <h5 className={cx("text-white")}>Angel Hawkins</h5>
              <div className={cx("action-bar")}>
                <div onClick={() => this.handleClick('Video icon')}><i className={"fa fa-video-camera"}></i></div>
                <div onClick={() => this.handleClick('Microphone icon')}><i className={"fa fa-microphone"}></i></div>
                <div onClick={() => this.handleClick('Share screen icon')}><i className={cx("fa fa-desktop")}></i></div>
                <div onClick={() => this.handleClick('Friend icon')}> <i className={cx("fa fa-users")}></i></div>
                <div onClick={() => this.handleClick('Comment icon')} className={cx("active")}><i className={cx("fa fa-comments")}></i></div>
              </div>
            </div>
            <div className={cx("visitors d-flex w-100 mt-auto")}>
              <div className={cx("visitor speaking")}>
                <div className={cx("options")}><i className={cx("fa fa-file-video-o")}></i> <i className={cx("fa fa-microphone-slash")}></i></div>
                <img src="image/User-Holder.png" alt="" />
                <h5>Speaker Name</h5>
                <p>Company Name</p>
              </div>
              <div className={cx("visitor")}>
                <div className={cx("options")}><i className={cx("fa fa-file-video-o")}></i> <i className={cx("fa fa-microphone-slash")}></i></div>
                <img src="image/User-Holder.png" alt="" />
                <h5>Speaker Name</h5>
                <p>Company Name</p>
              </div>
              <div className={cx("visitor")}>
                <div className={cx("options")}><i className={cx("fa fa-file-video-o")}></i> <i className={cx("fa fa-microphone-slash")}></i></div>
                <img src="image/User-Holder.png" alt="" />
                <h5>Speaker Name</h5>
                <p>Company Name</p>
              </div>
              <div className={cx("visitor")}>
                <div className={cx("options")}><i className={cx("fa fa-file-video-o")}></i> <i className={cx("fa fa-microphone-slash")}></i></div>
                <img src="image/User-Holder.png" alt="" />
                <h5>Speaker Name</h5>
                <p>Company Name</p>
              </div>
              <div className={cx("visitor")}>
                <div className={cx("options")}><i className={cx("fa fa-file-video-o")}></i> <i className={cx("fa fa-microphone-slash")}></i></div>
                <img src="image/User-Holder.png" alt="" />
                <h5>Speaker Name</h5>
                <p>Company Name</p>
              </div>
            </div>
          </div>
          <div className={cx("chat-area px-0")}>
            <div className={cx("title-bar")}>
              <h6><i className={cx("fa fa-comments")}></i> &nbsp;Chat</h6>
              <div><i className={cx("fa fa-times text-muted")}></i></div>
            </div>
            <div className={cx("messages-section p-3")}>
              <div className={cx("message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
              <div className={cx("message your-message")}>
                <div className={cx("user-details")}>
                  <img src="image/User-Holder.png" alt="" />
                  <h6 className={cx("ml-2 mb-0 text-muted")}>User name</h6>
                </div>
                <p className={cx("mt-2 mb-1")}>qihwygfiqwh; foqlywf liqwbfuyvq wifblqwykv kuqlwvblf qbwfb qwbfkq bhwjfblqw bfqwb fjqbwl fb</p>
                <div className={cx("time-stamp text-right")}>
                  <p className={cx("m-0 text-muted")}><small>09:30 AM</small></p>
                </div>
              </div>
            </div>
            <div className={cx("message-area mt-auto")}>
              <div className={cx("d-flex justify-content-center align-items-center")}>
                <div className={cx("action-btn bg-white")}>
                  <div className={"message-area-icon"}><i className={cx("fa fa-paperclip")}></i></div>
                  <input type="file" className={cx("d-none")} />
                </div>
              </div>

              <input type="text" className={cx("w-100")} placeholder="Type your text message in here" />
              <div className={cx("d-flex justify-content-center align-items-center")}>
                <div className={cx("action-btn bg-white")}>
                  <div className={"message-area-icon"}><i className={cx("fa fa-paper-plane")}></i></div>
                  <input type="file" className={cx("d-none")} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
}

export default Zoom;