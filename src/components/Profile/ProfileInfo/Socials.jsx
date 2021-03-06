import React, {useState} from "react";
import s from "../Profile.module.scss";

const Socials = props => {

    class Facebook extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hover: this.props.color
            }
        }

        render() {
            if (this.props.link) {
                return (
                    <a href={`https://${this.props.link}`} target="_blank" className={s.socialMedia}
                       onMouseEnter={() => {
                           this.setState({hover: this.props.hoverColor})
                       }}
                       onMouseLeave={() => {
                           this.setState({hover: this.props.color})
                       }}>

                        <svg enableBackground="new 0 0 112.196 112.196" version="1.1" viewBox="0 0 112.2 112.2"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="56.098" cy="56.098" r="56.098" fill={this.state.hover}
                                    style={{transition: 'fill 300ms'}}/>
                            <path
                                d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34   c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
                                fill="#fff"/>
                        </svg>
                    </a>
                )
            } else return null
        }
    }

    class Vk extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hover: this.props.color
            }
        }

        render() {
            if (this.props.link) {
                return (
                    <a href={`https://${this.props.link}`} target="_blank" className={s.socialMedia}
                       onMouseEnter={() => {
                           this.setState({hover: this.props.hoverColor})
                       }}
                       onMouseLeave={() => {
                           this.setState({hover: this.props.color})
                       }}>

                        <svg enableBackground="new 0 0 112.196 112.196" version="1.1" viewBox="0 0 112.2 112.2"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="56.098" cy="56.098" r="56.098" fill={this.state.hover}
                                    style={{transition: 'fill 300ms'}}/>
                            <path
                                d="m53.979 80.702h4.403s1.33-0.146 2.009-0.878c0.625-0.672 0.605-1.934 0.605-1.934s-0.086-5.908 2.656-6.778c2.703-0.857 6.174 5.71 9.853 8.235 2.782 1.911 4.896 1.492 4.896 1.492l9.837-0.137s5.146-0.317 2.706-4.363c-0.2-0.331-1.421-2.993-7.314-8.463-6.168-5.725-5.342-4.799 2.088-14.702 4.525-6.031 6.334-9.713 5.769-11.29-0.539-1.502-3.867-1.105-3.867-1.105l-11.076 0.069s-0.821-0.112-1.43 0.252c-0.595 0.357-0.978 1.189-0.978 1.189s-1.753 4.667-4.091 8.636c-4.932 8.375-6.904 8.817-7.71 8.297-1.875-1.212-1.407-4.869-1.407-7.467 0-8.116 1.231-11.5-2.397-12.376-1.204-0.291-2.09-0.483-5.169-0.514-3.952-0.041-7.297 0.012-9.191 0.94-1.26 0.617-2.232 1.992-1.64 2.071 0.732 0.098 2.39 0.447 3.269 1.644 1.135 1.544 1.095 5.012 1.095 5.012s0.652 9.554-1.523 10.741c-1.493 0.814-3.541-0.848-7.938-8.446-2.253-3.892-3.954-8.194-3.954-8.194s-0.328-0.804-0.913-1.234c-0.71-0.521-1.702-0.687-1.702-0.687l-10.525 0.069s-1.58 0.044-2.16 0.731c-0.516 0.611-0.041 1.875-0.041 1.875s8.24 19.278 17.57 28.993c8.555 8.907 18.27 8.322 18.27 8.322z"
                                clipRule="evenodd" fill="#fff" fillRule="evenodd"/>
                        </svg>
                    </a>
                )
            } else return null
        }
    }

    let Instagram = props => {
        let [hover, setHover] = useState(props.color);

        if (props.link) {
            return (<a href={`https://${props.link}`} target="_blank" className={s.socialMedia}
                       onMouseEnter={() => {
                           setHover(props.hoverColor);
                       }}
                       onMouseLeave={() => {
                           setHover(props.color);
                       }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.758 89.758">
                    <defs>
                        <radialGradient id="a" cx="21" cy="89" r="89" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#fccc63"/>
                            <stop offset=".081" stopColor="#fbb655"/>
                            <stop offset=".135" stopColor="#fbad50"/>
                            <stop offset=".317" stopColor="#e95950"/>
                            <stop offset=".418" stopColor="#dc515d"/>
                            <stop offset=".504" stopColor="#cd486b"/>
                            <stop offset=".661" stopColor="#bc2a8d"/>
                            <stop offset=".745" stopColor="#a631a0"/>
                            <stop offset=".871" stopColor="#8a3ab9"/>
                            <stop offset="1" stopColor="#4c68d7"/>
                        </radialGradient>
                    </defs>
                    <rect width="70%" height="70%" fill="#ffffff" style={{transform: "translate(15%, 15%)"}}/>
                    <g fill="url(#a)">
                        <path
                            d="M58.255 23.88H31.503c-4.27 0-7.744 3.474-7.744 7.744v26.752c0 4.27 3.474 7.745 7.744 7.745h26.752c4.27 0 7.745-3.474 7.745-7.745V31.624c0-4.27-3.474-7.744-7.745-7.744zM44.879 58.906c-7.667 0-13.905-6.238-13.905-13.906 0-7.667 6.238-13.905 13.905-13.905 7.668 0 13.906 6.238 13.906 13.905 0 7.667-6.239 13.906-13.906 13.906zM59.232 33.97a3.294 3.294 0 0 1-3.291-3.29 3.294 3.294 0 0 1 3.291-3.29 3.294 3.294 0 0 1 3.29 3.29 3.294 3.294 0 0 1-3.29 3.29z"/>
                        <path
                            d="M44.879 36.971c-4.426 0-8.03 3.602-8.03 8.028 0 4.428 3.604 8.031 8.03 8.031 4.428 0 8.029-3.603 8.029-8.031 0-4.425-3.602-8.028-8.029-8.028z"/>
                        <path
                            d="M44.879 0C20.094 0 0 20.094 0 44.879c0 24.785 20.094 44.879 44.879 44.879 24.785 0 44.879-20.094 44.879-44.879C89.758 20.094 69.664 0 44.879 0zm26.996 58.376c0 7.511-6.109 13.62-13.62 13.62H31.503c-7.51 0-13.62-6.109-13.62-13.62V31.624c0-7.51 6.11-13.62 13.62-13.62h26.752c7.511 0 13.62 6.11 13.62 13.62v26.752z"/>
                    </g>
                </svg>
            </a>)
        } else return null
    }

    let Email = props => {
        if (props.link) {
            return (<a href={`mailto:${props.link}`} target="_blank" className={s.socialMedia}>
                <svg enableBackground="new 0 0 299.997 299.997" version="1.1" viewBox="0 0 300 300"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="70%" height="70%" fill="#ffffff" style={{transform: "translate(15%, 15%)"}}/>
                    <path
                        d="m150 0c-82.839 0-150 67.158-150 150 0 82.837 67.156 150 150 150s150-67.163 150-150c0-82.839-67.161-150-150-150zm3e-3 52.686 88.763 55.35h-177.53l88.763-55.35zm89.869 143.74h-9e-3c0 8.878-7.195 16.072-16.072 16.072h-147.58c-8.878 0-16.072-7.195-16.072-16.072v-84.865c0-0.939 0.096-1.852 0.252-2.749l84.808 52.883c0.104 0.065 0.215 0.109 0.322 0.169 0.112 0.062 0.226 0.122 0.34 0.179 0.599 0.309 1.216 0.558 1.847 0.721 0.065 0.018 0.13 0.026 0.195 0.041 0.692 0.163 1.393 0.265 2.093 0.265h5e-3 0.01c0.7 0 1.401-0.099 2.093-0.265 0.065-0.016 0.13-0.023 0.195-0.041 0.63-0.163 1.245-0.412 1.847-0.721 0.114-0.057 0.228-0.117 0.34-0.179 0.106-0.06 0.218-0.104 0.322-0.169l84.808-52.883c0.156 0.897 0.252 1.808 0.252 2.749v84.865z"/>
                </svg>
            </a>)
        } else return null
    }

    let Twitter = props => {
        if (props.link) {
            return (<a href={`https://${props.link}`} target="_blank" className={s.socialMedia}>
                <svg enableBackground="new 0 0 112.197 112.197" version="1.1" viewBox="0 0 112.2 112.2"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="56.099" cy="56.098" r="56.098" fill="#55ACEE"/>
                    <path
                        d="m90.461 40.316c-2.404 1.066-4.99 1.787-7.702 2.109 2.769-1.659 4.894-4.284 5.897-7.417-2.591 1.537-5.462 2.652-8.515 3.253-2.446-2.605-5.931-4.233-9.79-4.233-7.404 0-13.409 6.005-13.409 13.409 0 1.051 0.119 2.074 0.349 3.056-11.144-0.559-21.025-5.897-27.639-14.012-1.154 1.98-1.816 4.285-1.816 6.742 0 4.651 2.369 8.757 5.965 11.161-2.197-0.069-4.266-0.672-6.073-1.679-1e-3 0.057-1e-3 0.114-1e-3 0.17 0 6.497 4.624 11.916 10.757 13.147-1.124 0.308-2.311 0.471-3.532 0.471-0.866 0-1.705-0.083-2.523-0.239 1.706 5.326 6.657 9.203 12.526 9.312-4.59 3.597-10.371 5.74-16.655 5.74-1.08 0-2.15-0.063-3.197-0.188 5.931 3.806 12.981 6.025 20.553 6.025 24.664 0 38.152-20.432 38.152-38.153 0-0.581-0.013-1.16-0.039-1.734 2.622-1.89 4.895-4.251 6.692-6.94z"
                        fill="#ffffff"/>
                </svg>
            </a>)
        } else return null
    }

    let Website = props => {
        if (props.link) {
            return (<a href={`https://${props.link}`} target="_blank" className={s.socialMedia}>
                <svg enableBackground="new 0 0 112.196 112.196" version="1.1" viewBox="0 0 112.2 112.2"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="56.098" cy="56.098" r="56.098" fill="rgb(0, 132, 31)"/>
                    <path
                        d="m56.097 20.472c-19.669 0-35.671 15.983-35.671 35.627s16.002 35.626 35.671 35.626c19.67 0 35.673-15.981 35.673-35.626 0-19.644-16.003-35.627-35.673-35.627zm23.473 16.815c4.069 5.043 6.542 11.412 6.656 18.352-1.354-0.278-7.088-1.347-13.94-1.347-2.211 0-4.538 0.111-6.871 0.399-0.197-0.479-0.394-0.956-0.601-1.438-0.605-1.423-1.257-2.835-1.932-4.226 10.546-4.345 15.633-10.375 16.688-11.74zm-23.473-11.238c7.601 0 14.549 2.824 19.856 7.475-0.84 1.146-5.396 6.841-15.565 10.683-4.707-8.604-9.859-15.729-11.085-17.383 2.185-0.506 4.459-0.775 6.794-0.775zm-12.945 2.92c1.039 1.431 6.199 8.632 11.027 17.167-12.957 3.406-24.463 3.628-27.24 3.628h-0.295c1.995-9.194 8.207-16.834 16.508-20.795zm-17.192 27.177c0-0.248 4e-3 -0.496 0.012-0.743 0.18 2e-3 0.446 2e-3 0.791 2e-3 3.74 0 16.722-0.309 30.1-4.279 0.812 1.588 1.585 3.2 2.304 4.811-0.338 0.097-0.671 0.194-1.002 0.302-15.063 4.865-23.342 17.744-24.616 19.849-4.72-5.318-7.589-12.3-7.589-19.942zm30.137 30.095c-6.912 0-13.291-2.341-18.381-6.266 0.861-1.688 7.11-12.939 23.617-18.684 0.01-4e-3 0.021-8e-3 0.033-0.011 4.139 10.776 5.892 19.82 6.373 22.623-3.582 1.506-7.516 2.338-11.642 2.338zm17.07-5.305c-0.404-2.319-2.028-10.795-5.776-21.133 2.102-0.327 4.147-0.456 6.065-0.456 6.299 0 11.226 1.379 12.371 1.729-1.361 8.209-6.061 15.313-12.66 19.86z"
                        fill="#ffffff"/>
                </svg>
            </a>)
        } else return null
    }

    return (
        <div className={s.social}>
            <Facebook link={props.profile.contacts.facebook} color="#3B5998" hoverColor="#333333"/>
            <Vk link={props.profile.contacts.vk} color="#4D76A1" hoverColor="#333333"/>
            <Instagram link={props.profile.contacts.instagram}/>
            <Email link={props.profile.contacts.mainLink}/>
            <Twitter link={props.profile.contacts.twitter}/>
            <Website link={props.profile.contacts.website}/>
        </div>
    )
}

export default Socials;