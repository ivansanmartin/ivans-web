/**
 * Create a projects for view in frontend
 * @mdoule Project
 *
 * @property {string} containerId
 * @property {Object} [obj]
 *
 */
class Project {
    constructor(containerId, obj) {
        this.container = document.getElementById(containerId);
        this.obj = obj;

        this.techs = {
            nodejs: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
            </svg>
            
            `,
            js: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
            </svg>
            
            `,
            express: `
        
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#212121" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="#212121" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path>
            </svg>  
            
            `,
            ejs: `
                
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#c0ca33" d="M34.868,28.641c0.73,0.675,1.409,1.362,2.151,1.974c1.007,0.832,2.125,1.469,3.471,1.568 c0.84,0.062,1.631-0.066,2.246-0.709c1.155-1.207,0.779-3.317-0.778-4.072c-0.955-0.463-1.975-0.795-2.975-1.163 c-1.596-0.587-3.121-1.287-4.309-2.555c-0.531-0.567-0.893-1.236-1.108-1.976c-0.615-2.118-0.692-4.257-0.017-6.366 c0.766-2.396,2.46-3.849,4.892-4.412c2.043-0.472,3.998-0.09,5.874,0.778c1.137,0.526,2.132,1.252,3.015,2.14 c0.186,0.187,0.224,0.333,0.093,0.574c-0.661,1.212-1.305,2.434-1.955,3.652c-0.033,0.061-0.076,0.117-0.134,0.206 c-0.245-0.215-0.473-0.423-0.711-0.621c-1.338-1.114-2.816-1.888-4.613-1.876c-1.188,0.008-1.994,0.623-2.271,1.731 c-0.298,1.195,0.14,2.253,1.15,2.814c1.119,0.621,2.343,0.969,3.539,1.393c1.719,0.609,3.246,1.507,4.317,3.032 c0.714,1.017,1.004,2.188,1.126,3.405c0.146,1.458,0.089,2.899-0.369,4.309c-0.916,2.82-3.292,4.638-6.264,4.79 c-2.574,0.132-4.824-0.699-6.782-2.324c-0.731-0.607-1.372-1.322-2.042-2c-0.066-0.067-0.101-0.255-0.056-0.329 c0.81-1.313,1.635-2.618,2.458-3.923C34.832,28.66,34.862,28.646,34.868,28.641z"></path><polygon fill="#c0ca33" points="14.274,16.462 14.274,11.34 0.009,11.34 0.009,36.896 14.274,36.896 14.274,31.774 5.16,31.774 5.16,26.821 13.226,26.821 13.226,21.698 5.16,21.698 5.16,16.462"></polygon><path fill="#c0ca33" d="M29.613,11.34H19.34v5.038h5.208v13.005c0.085,2.08-1.047,2.533-1.047,2.533	c-2.377,0.792-4.346-2.343-4.346-2.343l-2.39,4.211c3.566,3.934,7.443,3.311,7.443,3.311c5.377-0.113,5.377-7.712,5.377-7.712	L29.613,11.34z"></path>
            </svg>
            
            `,
            bootstrap: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path>
            </svg>
        
            `,
            css: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
            </svg>
            `,
            html: `
                
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
            
            `,
            mysql: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
            </svg>  
            
            `,
            react: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 40 40">
                <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
            </svg>
            `,
            mongodb: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
            </svg>

            `,
            redis: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#b71c1c" d="M45,29.316c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,29.316,3,29.832,3,30.469v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,32.882,45,32.83,45,32.775V29.316z"></path><path fill="#e53935" d="M20.616,39.158c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,39.792,22.048,39.798,20.616,39.158z"></path><path fill="#b71c1c" d="M45,21.675c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,21.675,3,22.192,3,22.829v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,25.242,45,25.19,45,25.135V21.675z"></path><path fill="#e53935" d="M20.616,31.517c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,32.152,22.048,32.158,20.616,31.517z"></path><path fill="#b71c1c" d="M45,14.035c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,14.035,3,14.551,3,15.188v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,17.601,45,17.549,45,17.494V14.035z"></path><path fill="#e53935" d="M20.616,23.877c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,24.512,22.048,24.517,20.616,23.877z"></path><path fill="#fff" d="M18.748,14.741c-0.002,1.042-2.762,2.057-5.093,2.086c-2.419,0.03-5.273-0.993-5.282-2.051	c-0.009-1.061,2.842-2.161,5.311-2.135C16.017,12.665,18.751,13.703,18.748,14.741z"></path><path fill="#fff" d="M17.038,18.471c2.393,1.022,4.785,2.045,7.178,3.067c1.054-1.56,2.108-3.12,3.162-4.68	C23.931,17.396,20.485,17.934,17.038,18.471z"></path><path fill="#fff" d="M21.86,9.775c-1.101,0.401-2.203,0.801-3.304,1.202c1.507,0.132,3.015,0.264,4.522,0.395	c0.48,0.796,0.959,1.592,1.439,2.387c0.295-0.722,0.59-1.444,0.885-2.166c1.286-0.1,2.572-0.2,3.858-0.3	c-0.997-0.419-1.994-0.839-2.991-1.259c0.254-0.608,0.508-1.216,0.762-1.825c-0.97,0.29-1.939,0.58-2.909,0.87	c-1.07-0.422-2.14-0.843-3.21-1.265C21.228,8.468,21.544,9.122,21.86,9.775z"></path><path fill="#b71c1c" d="M27.267,14.619c2.271-0.906,4.543-1.813,6.814-2.719c1.962,0.834,3.924,1.668,5.886,2.502	c-2.202,0.876-4.403,1.752-6.605,2.629C31.331,16.226,29.299,15.423,27.267,14.619z"></path><path fill="#a01c1c" d="M34.082,11.963c-0.005,1.596-0.01,3.191-0.015,4.787c1.967-0.783,3.934-1.565,5.901-2.348	C38.006,13.589,36.044,12.776,34.082,11.963z"></path>
            </svg>
            `,
            mysql:`
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="#216287"></circle><circle cx="24" cy="24" r="18" fill="#e87912"></circle><path fill="#216287" d="M29.69,31.95c0,4.35-3.09,7.98-7.19,8.82l-0.55,0.1C13.53,39.87,7,32.7,7,24c0-9.39,7.61-17,17-17 c0.17,0,0.35,0,0.52,0.01c-3.5,1.23-6.02,4.56-6.02,8.49c0,1.49,0.36,2.9,1.01,4.14c0.86,1.66,2.3,2.94,3.97,3.78l1.22,0.61 c1.67,0.84,3.12,2.12,3.98,3.78C29.32,29.05,29.69,30.46,29.69,31.95z"></path><path fill="#fff" d="M24,6C14.059,6,6,14.059,6,24c0,8.671,6.132,15.906,14.295,17.614l0.012,0.063l0.159-0.029 C21.609,41.876,22.79,42,24,42c9.941,0,18-8.059,18-18C42,14.059,33.941,6,24,6z M8,24c0-7.935,5.813-14.521,13.4-15.769 C19.309,9.994,18,12.626,18,15.5c0,1.519,0.367,3.029,1.062,4.368c0.865,1.668,2.316,3.051,4.197,3.996l1.219,0.613 c1.691,0.852,2.991,2.084,3.759,3.564c0.63,1.214,0.949,2.528,0.949,3.907c0,3.645-2.35,6.857-5.711,8.024 C14.897,39.693,8,32.645,8,24z M25.905,39.876c2.599-1.721,4.281-4.668,4.281-7.927c0-1.52-0.367-3.029-1.062-4.368 c-0.865-1.668-2.316-3.051-4.197-3.996l-1.219-0.613c-1.692-0.852-2.991-2.083-3.759-3.564C19.319,18.193,19,16.879,19,15.5 c0-3.173,1.781-6.017,4.464-7.473C23.643,8.021,23.819,8,24,8c8.822,0,16,7.178,16,16C40,32.177,33.831,38.93,25.905,39.876z"></path><path fill="#fff" d="M38.458,27.528c-0.776-0.927-2.018-1.829-2.809-3.135c-0.111-0.184-0.053-0.407,0.135-0.507 C36.799,23.342,36.978,23.441,38,23c-1-1-2.037-1.36-3.681-1.774c-0.322-0.067-0.507-0.337-0.561-0.634 c-0.088-0.323-0.275-0.87-0.471-1.307c-1.421-2.871-3.192-6.625-6.786-6.907c-0.237-0.003-0.463-0.099-0.62-0.257 c-0.453-0.432-1.087-0.967-1.67-1.055c-0.115,0.011-0.057-0.028-0.146,0.054c-0.233,0.273-0.186,0.283-0.026,0.63 c0.216,0.369,0.628,0.791,1.033,1.208c0.411,0.531,0.126,1.308,0.396,1.904c0.111,0.423,0.344,0.923,0.603,1.229 c0.125,0.161,0.163,0.365,0.124,0.55c-0.288,1.377-0.491,2.862-0.212,4.241c0.006,0.147,0.15,0.202,0.256,0.149 c0.033-0.026,0.032-0.008,0.16-0.233C26.556,20.448,27.675,18.307,28,19c0.473,1.538,1.13,4.53,2.522,5.455 c0.059,0.025,0.013,0.122-0.045,0.089c-1.454-0.751-2.631-2.682-2.978-3.984c-0.27,0.023-0.512,0.242-0.648,0.493 c-0.205,0.719-1.26,0.756-1.449-0.013c-0.076-0.298-0.138-0.6-0.167-0.905c-0.111-1.11-0.041-2.753,0.211-3.582 c-0.704-0.76-1.098-2.227-1.005-2.995c-0.413-0.418-0.847-0.829-1.17-1.344c-0.608-0.774-0.076-2.132,0.967-2.083 c0.924,0.077,1.672,0.707,2.33,1.301c0.729-0.065,2.173,0.444,2.982,0.991c1.834,1.191,2.799,3.236,3.847,5.078 c0.409,0.836,1.142,2.25,1.123,2.924c1.866,0.578,3.975,1.277,5.039,3.046c0.019,0.035,0.001,0.08-0.038,0.091 c0,0-2.9,0.91-2.9,0.91l1.921,3C38.575,27.522,38.495,27.584,38.458,27.528L38.458,27.528z"></path><path fill="#fff" d="M27.046,13.688l0.833,1.189C27.879,14.878,28.83,13.53,27.046,13.688z"></path><g><path fill="#fff" d="M9.762,20.071c0.776,0.927,2.018,1.829,2.809,3.135c0.111,0.184,0.053,0.407-0.135,0.507 c-1.015,0.543-1.193,0.444-2.215,0.886c1,1,2.037,1.36,3.681,1.774c0.322,0.067,0.507,0.337,0.561,0.634 c0.088,0.323,0.275,0.87,0.471,1.307c1.421,2.871,3.192,6.625,6.786,6.907c0.237,0.003,0.463,0.099,0.62,0.257 c0.453,0.432,1.087,0.967,1.67,1.055c0.115-0.011,0.057,0.028,0.146-0.054c0.233-0.273,0.186-0.283,0.026-0.63 c-0.216-0.369-0.628-0.791-1.033-1.208c-0.411-0.531-0.126-1.308-0.396-1.904c-0.111-0.423-0.344-0.923-0.603-1.229 c-0.125-0.161-0.163-0.365-0.124-0.55c0.288-1.377,0.491-2.862,0.212-4.241c-0.006-0.147-0.15-0.202-0.256-0.149 c-0.033,0.026-0.032,0.008-0.16,0.233c-0.158,0.348-1.277,2.49-1.602,1.796c-0.473-1.538-1.13-4.53-2.522-5.455 c-0.059-0.025-0.013-0.122,0.045-0.089c1.454,0.751,2.631,2.682,2.978,3.984c0.27-0.023,0.512-0.242,0.648-0.493 c0.205-0.719,1.26-0.756,1.449,0.013c0.076,0.298,0.138,0.6,0.167,0.905c0.111,1.11,0.041,2.753-0.211,3.582 c0.704,0.76,1.098,2.227,1.005,2.995c0.413,0.418,0.847,0.829,1.17,1.344c0.608,0.774,0.076,2.132-0.967,2.083 c-0.924-0.077-1.672-0.707-2.33-1.301c-0.729,0.065-2.173-0.444-2.982-0.991c-1.834-1.191-2.799-3.236-3.847-5.078 c-0.409-0.836-1.142-2.25-1.123-2.924c-1.866-0.578-3.975-1.277-5.039-3.046c-0.019-0.035-0.001-0.08,0.038-0.091 c0,0,2.9-0.91,2.9-0.91l-1.921-3C9.645,20.077,9.725,20.016,9.762,20.071L9.762,20.071z"></path><path fill="#fff" d="M21.174,33.911l-0.833-1.189C20.342,32.722,19.39,34.07,21.174,33.911z"></path></g>
            </svg>
            `,
            docker: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#2395ec" d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"></path><path fill="#2395ec" d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"></path><path fill="#2395ec" d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"></path><path fill="#2395ec" d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"></path><path fill="#2395ec" d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"></path><path fill="#2395ec" d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"></path><path fill="#2395ec" d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"></path><path fill="#2395ec" d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"></path><path fill="#2395ec" d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"></path><path fill="#2395ec" d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"></path>
            </svg>
            
            `

        }

        this.obj.forEach(async (value) => {
    
            let techs = this.getTechnologiesProject(value.technologies)
            
            this.container.innerHTML += `
            <div class="card card-1">
            <img src="${value.img}" alt="">
        
                <div class="cuerpo-card text-wrap text-break">
                    <div>
                    <h2 class="fw-semibold">${value.name}</h2>
                    <p>${value.description}</p>
                    </div>
                    
                    <div class="techs">
                        <div>
                            ${techs.join("")}

                        </div>
                        
                        <a class="btn btn-info w-50 mt-3" href="${value.url}" target="_blank">
                            Ver
                        </a>

                    </div>
        
                </div>
            </div>
        
        
        `;
        });
    }

    getLastProject() {
        return this.obj.filter((value) =>
            value.last == true ? value : undefined
        );
    }

    getTechnologiesProject(technologies) {
        return technologies.map(value => this.techs[value])
        
    }
}

class Blog {
    constructor(containerId, obj) {
        this.container = document.getElementById(containerId);
        this.obj = obj;

        this.obj.forEach(async (value) => {

            
            this.container.innerHTML += `
            <div class="card card-1">        
                <div class="body-card text-wrap text-break w-100 p-3">
                    <div>
                    <h2 class="fw-semibold mb-4">${value.name}</h2>
                    <p>${value.description}</p>
                    </div>
                    
                    <div class="img-reference">
                        <div>
                            <img src="${value.img}" alt="">
                        </div>
                        
                        <p class=" mt-3 text-secondary fst-italic">Fecha publicación: <span class="text-decoration-underline">${value.created_at}</span></p>

                        <a href="${value.url}" class="btn btn-info w-50 mt-3" ${value.disabled && 'style="pointer-events: none;'}">${value.button}</a>

                    </div>
        
                </div>
            </div>
        
        
        `;
        });
    }

}



const lastProjectContent = document.getElementById("project");
const lastProjectDate = document.getElementById("date_created");
const projectButtonRedirect = document.getElementById("view-lastproject");
let projects = new Project("projects", [
    {
        name: "Sport Gym App",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/f_auto,q_auto/v1/ivansanmartin.github.io/nl1aqvmir1m0mkm9aicy",
        description:
            "Aplicación realizada para ser usada en gimnasios y tener mayor control de rutinas y clientes. Despliegue realizado en Fly.io.",
        technologies: ["nodejs", "express", "js", "css", "html", "bootstrap", "ejs", "mysql"],
        url: "https://github.com/ivansanmartin/sport-gym-app",
        created_at: "05/06/2023",
        last: false,
    },

    {
        name: "Binary Decimal API",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/f_auto,q_auto/v1/ivansanmartin.github.io/c8oc7i5r8tehx0gyfbcv",
        description:
            "API REST diseñada para desarrolladores juniors que deseen practicar la integración de API's en sus aplicaciones, tanto frontend y backend.",
        technologies: ["nodejs", "express"],
        url: "https://ivansanmartin.vercel.app/project",
        last: false,
    },
    {
        name: "Binary Decimal App",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/f_auto,q_auto/v1/ivansanmartin.github.io/vdfuy0ggdatdk04xm0xi",
        description:
            "Aplicacion MERN stack consumiendo mi API Rest de \"Binary Decimal API\". Mi primera aplicación web utilizando Auth0.",
        technologies: ["mongodb", "express", "react", "nodejs", "js", "html", "css", "bootstrap"],
        url: "https://binary-decimal-app.vercel.app/",
        created_at: "21/08/2023",
        last: false,
    },    
    {
        name: "ivsmPanel",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/v1706040389/ivansanmartin.github.io/kfaixpct9xoolw9giylo.png",
        description:
            "ivsmPanel es un layout administrativo adaptable y atractivo para dispositivos grandes y pequeños. Personaliza y amplía fácilmente para crear paneles administrativos únicos. ¡Versatilidad total con un diseño responsive!",
        technologies: ["js", "html", "css", "bootstrap"],
        url: "/projects/ivsm-panel",
        created_at: "23/01/2024",
        last: false,
    },
    {
        name: "flash-cache",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/v1708626730/ivansanmartin.github.io/pfnzccnhqmh0vcxawinf.gif",
        description:
            "flash-cache es una herramienta de pruebas para ver el funcionamiento de Redis utilizando caching a la hora de consumir APIs públicas o privadas en local, acelerando el tiempo de respuesta.",
        technologies: ["express", "nodejs", "react", "html", "css", "bootstrap", "redis", "docker"],
        url: "https://github.com/ivansanmartin/flash-cache",
        created_at: "23/01/2024",
        last: true,
    },
    
]);


const lastProject = projects.getLastProject()[0]
lastProjectContent.innerHTML = `⭐ ${lastProject.name}`;
lastProjectDate.innerHTML = `Creado el ${lastProject.created_at}`
projectButtonRedirect.href = lastProject.url;


let blogs = new Blog("blogs", [
    {
        name: "Docker - Primeros pasos",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/v1708695429/ivansanmartin.github.io/rboo0hymusg4q6skh0be.png",
        description:
            "Primeros pasos con Docker, creando contenedores, volumenes, redes y probando nuestra aplicación con Postman y MongoDB",
        url: "/blog/firsts-steps-docker",
        created_at: "12-02-2024",
        button: "Ver",
        last: false,
    },

    {
        name: "Docker Compose & Dockerfile",
        img: "https://res.cloudinary.com/dxupqwg5l/image/upload/v1708540288/docker-compose/evbpvkp81oelvzkjfqvv.jpg",
        description:
            "Creado nuestras propias imagenes y definiendo aplicaciones de multiples contenedores con Docker Compose",
        url: "/blog/docker-compose-and-dockerfile",
        created_at: "27-02-2024",
        button: "Ver",
        disabled: false,
        last: false,
    },
]);