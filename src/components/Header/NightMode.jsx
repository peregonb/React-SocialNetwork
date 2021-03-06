import React, {useEffect} from "react";
import s from "./Header.module.scss";
import ReactTooltip from "react-tooltip"
import {connect} from "react-redux";
import {nightMode} from "../../redux/profile-reducer";
import {getBodyClass, getButtonClass, getTooltipMessage} from "../../redux/profile-selectors";

const NightMode = props => {


    let setThemeNight = () => {
        document.body.setAttribute("theme", "night");
        props.dispatchState(
            `${s.nightModeSwitch} ${s.active}`,
            "Дневной режим",
            localStorage.setItem('nightMode', 'night')
        )
    };

    let setThemeDay = () => {
        document.body.setAttribute("theme", "day");
        props.dispatchState(
            s.nightModeSwitch,
            "Ночной режим",
            localStorage.setItem('nightMode', 'day')
        )
    };


    let switchClick = () => {
        if (localStorage.getItem('nightMode') === 'day') {
            setThemeNight();
        } else {
            setThemeDay();
        }
    };

    useEffect(() => {
        if (localStorage.getItem('nightMode') === 'day') {
            setThemeDay();
        } else {
            setThemeNight();
        }
    }, []);


    return (
        <div className={props.buttonClass} onClick={switchClick} data-place="bottom"
             data-tip={props.tooltipMessage}>
            <svg className={s.night} style={{height: "16px", width: "16px"}}
                 enableBackground="new 0 0 438.277 438.277" version="1.1" viewBox="0 0 438.28 438.28"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff"
                      d="m428.76 300.1c-0.664-3.81-2.334-7.047-4.996-9.713-5.9-5.903-12.752-7.142-20.554-3.716-20.937 9.708-42.641 14.558-65.097 14.558-28.171 0-54.152-6.94-77.943-20.838-23.791-13.894-42.631-32.736-56.525-56.53-13.899-23.793-20.844-49.773-20.844-77.945 0-21.888 4.333-42.683 12.991-62.384 8.66-19.7 21.176-36.973 37.543-51.82 6.283-5.898 7.713-12.752 4.287-20.557-3.236-7.801-9.041-11.511-17.415-11.132-29.121 1.141-56.72 7.664-82.797 19.556-26.076 11.895-48.489 27.547-67.238 46.965-18.747 19.414-33.595 42.399-44.54 68.95-10.942 26.553-16.416 54.39-16.416 83.511 0 29.694 5.806 58.054 17.416 85.082 11.613 27.028 27.218 50.344 46.824 69.949 19.604 19.599 42.92 35.207 69.951 46.822 27.028 11.607 55.384 17.415 85.075 17.415 42.64 0 81.987-11.563 118.05-34.69 36.069-23.124 63.05-54.006 80.944-92.645 1.524-3.423 1.951-7.036 1.28-10.838zm-122.19 84.064c-24.646 11.711-50.676 17.562-78.087 17.562-24.743 0-48.39-4.853-70.947-14.558-22.554-9.705-41.971-22.695-58.246-38.972-16.271-16.272-29.259-35.686-38.97-58.241-9.707-22.556-14.561-46.203-14.561-70.948 0-40.922 12.135-77.466 36.403-109.64 24.266-32.165 55.531-53.959 93.788-65.379-19.795 31.405-29.694 65.379-29.694 101.93 0 34.644 8.564 66.715 25.697 96.223 17.128 29.499 40.446 52.811 69.95 69.948 29.499 17.129 61.565 25.694 96.211 25.694 10.656 0 21.129-0.855 31.408-2.57-17.318 20.938-38.307 37.255-62.952 48.951z"/>
            </svg>
            <svg className={s.day} style={{height: "20px", width: "20px"}} enableBackground="new 0 0 302.4 302.4"
                 version="1.1" viewBox="0 0 302.4 302.4" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff"
                      d="m204.8 97.6c-13.6-13.6-32.8-22.4-53.6-22.4s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6 32.8 22.4 53.6 22.4 40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2z"/>
                <path fill="#ffffff"
                      d="m292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4s4.8 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4s-4.8-10.4-10.4-10.4z"/>
                <path fill="#ffffff"
                      d="m151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4s10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4z"/>
                <path fill="#ffffff"
                      d="m258 243.6-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"/>
                <path fill="#ffffff"
                      d="m151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4s10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4z"/>
                <path fill="#ffffff"
                      d="m258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4z"/>
                <path fill="#ffffff"
                      d="m41.2 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4s-4.8-10.4-10.4-10.4z"/>
                <path fill="#ffffff"
                      d="m80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4z"/>
                <path fill="#ffffff"
                      d="m80.4 66.4-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"/>
            </svg>
            <ReactTooltip/>
        </div>
    );
};


let mapStateToProps = state => {
    return {
        buttonClass: getButtonClass(state),
        tooltipMessage: getTooltipMessage(state),
        bodyClass: getBodyClass(state)
    }
};

let mapDispatchToProps = dispatch => {
    return {
        dispatchState: (buttonClass, tooltipMessage, bodyClass) => {
            dispatch(nightMode(buttonClass, tooltipMessage, bodyClass))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NightMode);
