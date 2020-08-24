<template>
  <q-page class="div">
    <!-- <div class="form">
  
    </div>-->
    <div class="wrapper">
      <div class="wrapp_container">
        <transition
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut"
        >
          <div class="infinity">
            <div class="university">
              <h4>Интерактивная карта площадок</h4>

              <div class="wrap_buttons">
                <button
                  id="first"
                  @click="active"
                  v-bind:class="{button_active: oez_button}"
                >Особая экономическая зона "Липецк"</button>
                <button
                  id="third"
                  @click="active"
                  v-bind:class="{button_active: industrial_button}"
                >Индустриальные парки</button>
                <button
                  id="second"
                  @click="active"
                  v-bind:class="{button_active: oezru_button}"
                >Особые экономические зоны Регионального Уровня</button>
                <button
                  id="four"
                  @click="active"
                  v-bind:class="{button_active: techno_button}"
                >Технопарки</button>
              </div>
            </div>
            <div class="left_map">
              <svg viewBox="0 0 868 760" class="svg_map" id="svg">
                <path
                  class="part"
                  @click="index = 0,  activeMap($event)"
                  id="dankov"
                  d="m 290.571,209.49 h 18.566 l 6.392,17.205 18.09,-4.08 12.717,9.317 13.805,-4.761 7.956,16.322 13.601,-6.325 8.637,-19.993 10.813,-2.789 8.228,-2.176 12.649,-24.482 -4.08,-4.964 14.961,-28.562 -6.801,-14.961 17.682,-6.393 v -4.08 l 15.913,-8.568 -8.773,-15.098 -16.049,6.121 -3.74,-5.1 -28.222,-3.061 -4.081,5.781 -5.44,-0.68 V 84.701 l -8.161,-1.0201 -0.34,-28.222 -10.54,1.02 3.4,-31.9623 -14.621,-7.4805 -4.761,4.4203 -4.08,-6.1205 h -11.901 l -2.38,14.2811 -8.161,-7.4806 -37.062,13.941 -4.421,12.2409 10.541,7.4806 -8.16,8.1606 3.06,15.6411 11.901,10.8808 -1.02,14.6206 -10.201,7.141 -13.261,-2.72 -6.461,10.541 -6.8,-7.821 -33.322,22.442 7.82,3.4 2.04,12.921 16.321,6.8 3.741,15.981 -15.641,17.002 2.04,6.8 21.421,12.241 -0.136,0.272 14.485,-7.412 z"
                />
                <path
                  class="part"
                  @click="index = 1, activeMap($event)"
                  id="lev"
                  d="m 421.616,217.652 v 10.405 l 10.405,-5.169 3.604,12.445 13.193,4.557 22.17,-13.601 8.637,2.448 4.08,23.802 h 15.845 l 11.833,-4.965 12.241,-15.641 -12.717,-10.201 -9.521,-9.52 4.965,-6.801 15.437,6.801 15.845,-6.801 5.1,-9.997 v -10.88 l -10.541,-4.081 5.033,-5.848 h 5.508 l 3.536,-18.633 h -11.764 l -2.313,-11.289 10.541,-11.357 h 20.334 l -11.833,-25.842 -16.321,6.324 -12.649,4.557 h -14.961 l -0.952,-10.881 -18.09,-1.36 1.36,-8.1607 -5.1,-5.7804 -15.301,-2.3802 -4.761,10.2003 -13.533,5.101 8.773,15.097 -15.913,8.569 v 4.08 l -17.681,6.392 6.8,14.961 -14.961,28.562 3.672,4.977 -12.241,24.47 z"
                />
                <path
                  class="part"
                  @click="index = 2, activeMap($event)"
                  id="chaplygin"
                  d="m 642.42898,284.63599 -21.829,0.816 v 7.888 l -14.009,-2.244 -2.312,-12.717 -8.161,-6.8 -4.08,-18.09 -16.321,6.325 -8.569,-16.322 -29.038,-3.196 -14.485,-8.364 -22.239,-19.71999 4.965,-6.80101 15.437,6.80101 15.845,-6.80101 5.1,-9.997 v -10.88 l -10.541,-4.08099 5.03301,-5.848 h 5.50799 l 3.53601,-18.633 h -11.764 l -2.31301,-11.289 10.541,-11.357 h 20.334 l -11.833,-25.842 -28.97,10.881 h -14.96099 l -0.95201,-10.881 -18.09,-1.36001 1.361,-8.163393 2.577,-49.302198 49.44701,-23.4631 15.301,16.6612 8.50099,-13.601 19.041,23.121699 8.885,6.1218 1.704,22.441599 -6.813,12.921 14.648,1.020099 6.813,11.560304 24.527,7.14099 11.781,-2.38199 13.42799,21.423 -2.38499,14.281 -23.505,18.36199 -0.119,30.60101 12.723,23.46299 6.132,41.483 -18.736,16.661 z"
                />
                <path
                  class="part"
                  @click="index = 5, activeMap($event)"
                  id="lebedyan"
                  d="m 274.85999,209.82999 -9.179,22.102 14.009,2.924 13.397,6.12 15.165,2.516 16.798,-2.516 v 13.193 l 13.125,16.321 -6.12101,10.881 6.59701,8.569 h 5.44 l 16.049,8.636 -19.449,18.566 11.08499,2.04 -6.80099,11.153 2.924,12.445 h -7.208 v 9.724 l 10.201,2.313 6.324,14.689 -1.223,2.584 18.904,4.895 h 11.017 v 7.141 l 8.83999,3.06 4.76101,-8.841 14.14499,3.74 7.95601,-11.90001 2.04,-15.301 h 28.22199 l -8.091,-15.98099 11.629,-4.828 v -9.861 l 26.046,-18.157 -16.321,-26.318 11.561,-12.241 -2.721,-10.405 9.72401,-4.554 -4.08001,-23.802 -8.63699,-2.448 -22.17,13.601 -13.193,-4.557 -3.604,-12.445 -10.405,5.169 v -10.405 l -12.239,-5.44299 -19.042,4.96399 -8.63701,19.995 -13.59999,6.323 -7.957,-16.32 -13.80501,4.761 -12.71699,-9.318 -18.09,4.081 -6.392,-17.205 h -18.566 l -1.836,-6.79999 z"
                />
                <path
                  class="part"
                  @click="index = 6, activeMap($event)"
                  id="dobroe"
                  d="m 443.787,338.903 11.629,-4.828 v -9.861 l 26.046,-18.157 -16.321,-26.318 11.561,-12.241 -2.721,-10.405 7.481,-4.556 h 18.089 l 11.833,-4.964 12.241,-15.641 14.485,8.364 29.038,3.196 8.569,16.322 16.321,-6.325 4.08,18.09 8.161,6.8 2.312,12.717 14.009,2.244 v -7.888 l 20.673,-0.817 0.341,24.482 -14.282,0.34 -7.48,9.181 1.36,9.861 16.321,0.68 -1.02,52.024 -20.401,6.46 1.428,10.201 -15.505,-7.005 -7.957,1.36 -10.881,-3.196 -6.12,4.284 -17.205,1.837 -1.837,-3.197 5.033,-6.528 -5.237,-3.672 -6.324,-7.141 -15.981,4.76 -20.062,-7.684 v -6.597 l -20.401,-4.08 5.44,-6.12 -1.7,-4.081 1.7,-7.14 -4.08,-4.761 -13.601,6.461 -11.561,-4.42 -19.381,13.941 z"
                />
                <path
                  @click="index = 4, activeMap($event)"
                  class="part"
                  id="krasnoe"
                  d="m 340.691,400.108 2.924,-17.885 h 7.481 l 6.12,-12.717 -6.324,-14.689 -10.201,-2.313 v -9.724 h 7.208 l -2.924,-12.445 6.801,-11.153 -11.085,-2.04 19.449,-18.566 -16.049,-8.636 h -5.44 l -6.597,-8.569 6.121,-10.881 -13.125,-16.321 v -13.193 l -16.798,2.516 -15.165,-2.516 -13.397,-6.12 -14.009,-2.924 -4.556,11.56 -12.581,8.161 -5.848,16.933 0.408,2.993 -9.521,5.78 24.822,39.103 -6.461,7.48 -10.2,1.7 -8.161,9.181 12.377,6.121 -4.216,17.001 27.542,14.893 14.621,-5.713 -2.04,-6.12 9.86,-2.72 1.224,22.033 28.698,6.529 1.701,7.82 h 6.46 z"
                />
                <path
                  @click="index = 3, activeMap($event)"
                  class="part"
                  id="stanovoe"
                  d="m 176.8,416.769 7.82,7.82 8.501,-3.06 -2.72,-12.581 10.881,-2.04 10.54,-12.921 36.111,-5.44 7.072,-7.141 14.282,-8.568 -27.542,-14.893 4.216,-17.002 -12.377,-6.12 8.161,-9.181 10.2,-1.7 6.461,-7.481 -13.601,-21.081 -11.221,-18.021 9.521,-5.781 -0.408,-2.992 -17.954,-17.273 -3.74,1.36 0.34,14.281 -24.482,2.04 -1.02,20.742 -7.82,-0.34 -2.721,-24.142 -9.52,-3.4 -16.321,7.82 -10.881,-8.841 3.06,-6.46 -17.001,-5.78 -7.141,1.36 h -18.361 l -6.121,-6.461 -25.5014,1.7 -21.7616,45.224 8.7046,21.421 5.2364,-0.816 v -9.861 l 10.8808,7.345 h 18.3613 l 8.5009,17.817 17.001,5.781 v 4.42 l -16.661,5.1 3.74,14.621 5.1,4.081 -5.78,7.82 17.001,29.922 h 9.521 v -11.22 l 11.221,-1.701 8.84,12.921 -2.108,8.569 11.969,11.153 z"
                />
                <path
                  @click="index = 7, activeMap($event)"
                  class="part"
                  id="ismalkovo"
                  d="m 89.883497,531.15298 3.269699,-11.69499 15.640804,-4.08001 23.80199,8.84 v -27.20199 l 5.44,-6.46 8.433,-1.09101 1.76901,-21.353 19.041,-6.121 -4.76,-7.13999 4.76,-6.118 -4.42001,-8.91201 h -11.561 l -3.74,2.109 -9.52099,1.7 -7.821,-9.861 2.04,-2.717 -2.04,-5.101 15.301,-8.5 7.82099,2.04 4.08001,-21.42199 -8.84001,-12.923 -11.22099,1.701 v 11.22 h -9.52101 l -17.002,-29.92 5.78101,-7.821 -5.10001,-4.082 -3.74099,-14.61901 16.662,-5.10199 v -4.42 l -17.002,-5.779 -8.499905,-17.819 H 80.572797 l -10.881299,-7.343 v 9.861 l -5.235901,0.814 2.944501,7.141 -18.0548,10.201 18.646,21.423 5.881299,12.239 -4.4285,24.142 -24.527298,11.901 6.472499,12.92099 -6.1319,3.06001 6.7528,6.802 -2.3802,12.24099 -29.581199,3.73901 2.7253,7.81999 11.554799,0.002 4.1154,10.199 15.6702,-2.04001 -7.1538,9.861 11.582399,7.82001 -3.406599,6.801 -11.582299,4.41999 4.769199,11.561 12.6043,-2.37999 7.153799,8.5 6.131801,-2.72 7.378999,5.44199 -3.740199,9.861 -7.4806,2.04 -3.312001,5.439 15.8929,16.66201 z"
                />
                <path
                  @click="index = 8, activeMap($event)"
                  class="part"
                  id="elec"
                  d="m 317.56999,489.46599 -7.821,-13.873 5.781,-10.88 -11.561,-32.643 13.601,4.08099 23.121,-7.48099 v -28.562 l -10.881,-5.44101 h -6.46 l -1.701,-7.81999 -28.698,-6.529 -1.224,-22.03301 -9.86,2.72 2.04,6.12001 -14.621,5.712 -14.281,8.569 -7.072,7.141 -36.111,5.44 -10.54,12.921 -10.881,2.04 2.72,12.58 -8.50099,3.06099 -7.82001,-7.82099 -9.52099,1.021 -11.96901,-11.153 -1.972,12.852 -7.82099,-2.03701 -15.301,8.497 2.04,5.104 -2.04,2.72 7.821,9.85798 9.52,-1.69797 3.74098,-2.11103 h 11.561 l 4.42002,8.90903 -4.76,6.12099 4.76,7.13998 -19.042,6.12303 -1.76801,21.35399 4.829,-0.61299 3.74,4.75799 32.982,-2.37699 -6.46,19.381 13.601,5.098 3.4,5.44299 20.402,9.518 11.90001,-5.77799 6.80099,6.45799 22.442,-13.938 3.74,5.097 -2.72,8.161 1.156,6.258 10.404,-3.53599 v -13.94101 l 14.622,-5.78099 -6.461,-20.061 6.461,-13.26101 z"
                />
                <path
                  @click="index = 9,activeMap($event)"
                  class="part"
                  id="zadonsk"
                  d="m 308.389,642.886 14.145,-9.725 5.645,-12.241 22.237,-10.881 9.521,-2.516 -5.645,-15.165 -1.632,-7.957 7.277,-7.208 12.445,2.72 12.921,-6.393 18.633,-3.604 4.08,-14.757 -15.437,-23.122 2.04,-10.2 5.441,-2.04 -1.156,-18.77 9.112,-5.236 v -15.437 h -10.88 l -3.673,-2.448 3.673,-7.753 -4.761,-4.488 22.442,-18.022 8.16,4.625 3.129,-8.365 -9.929,-9.793 -23.394,6.597 3.876,-9.521 -3.876,-9.317 -6.12,2.721 -5.169,-2.721 -12.921,-1.564 -2.992,-2.516 5.713,-6.528 -1.156,-6.801 11.084,-5.916 -2.244,-9.045 -9.044,-4.76 4.964,-7.753 -18.905,-4.896 -4.897,10.133 h -7.48 l -2.925,17.885 v 28.562 l -23.121,7.481 -13.601,-4.081 11.561,32.643 -5.781,10.88 7.821,13.873 -30.262,-9.112 -6.461,13.261 6.461,20.061 -14.622,5.781 v 13.941 l -10.404,3.536 3.944,21.285 21.082,22.102 -4.421,8.161 4.421,5.1 -11.901,18.701 5.78,4.761 -4.08,5.78 4.08,3.74 10.201,-2.72 2.72,10.881 v 14.621 z"
                />
                <path
                  @click="index = 10, activeMap($event)"
                  class="part"
                  ref="lipetsk"
                  d="m 476.701,429.145 16.525,-7.684 -8.296,-10.405 26.386,-22.238 v 7.277 c 0,0 -2.925,4.08 -2.244,4.556 0.68,0.476 7.956,5.237 7.956,5.237 l 6.325,-7.481 4.964,4.284 -2.924,8.161 23.733,6.596 0.068,2.245 2.517,6.12 -2.041,10.201 9.997,25.366 -9.997,4.76 -7.684,-6.801 -17.681,8.569 1.156,6.597 -4.557,3.876 -15.913,-10.473 -11.765,-24.006 -10.88,-4.08 -5.645,-7.48 z"
                />
                <path
                  @click="index = 10,activeMap($event)"
                  class="part"
                  id="lipetsk"
                  d="m 374.897,376.985 h 11.017 v 7.141 l 8.84,3.06 4.761,-8.841 14.145,3.74 7.956,-11.9 2.04,-15.301 h 28.222 l 19.382,-13.942 11.561,4.421 13.601,-6.461 4.08,4.761 -1.7,7.14 1.7,4.081 -5.44,6.12 20.401,4.08 v 6.597 l 20.061,7.684 15.982,-4.76 6.324,7.14 -13.125,6.393 -0.952,11.085 5.032,7.684 0.34,10.473 -23.733,-6.596 2.992,-8.161 -5.032,-4.284 -6.325,7.48 -7.956,-5.236 2.312,-4.556 v -7.209 l -26.454,22.17 8.296,10.472 -16.525,7.685 v 3.196 l 5.645,7.481 10.88,4.08 11.765,24.006 -1.768,12.581 6.121,4.216 7.208,20.605 -15.845,12.445 12.037,14.553 -4.353,9.045 -3.4,-0.476 -10.201,4.556 -15.029,-8.5 -5.78,5.576 5.44,11.289 -1.36,6.392 7.481,9.249 -5.101,12.241 -11.22,3.196 v -9.044 l -8.841,-7.957 -6.12,5.644 -5.373,-2.584 -4.624,-13.261 h -11.561 l -8.637,-1.36 -8.84,7.957 -22.646,-32.235 2.04,-10.2 5.441,-2.04 -1.157,-18.77 9.113,-5.236 v -15.437 h -10.881 l -3.672,-2.449 3.672,-7.752 -4.76,-4.488 22.442,-18.022 8.16,4.625 3.128,-8.365 -9.928,-9.793 -23.394,6.597 3.876,-9.521 -3.876,-9.317 -6.12,2.721 -5.169,-2.721 -12.921,-1.564 -2.992,-2.516 5.712,-6.528 -1.156,-6.801 11.085,-5.916 -2.244,-9.045 -9.045,-4.76 z"
                />

                <path
                  @click="index = 11, activeMap($event)"
                  class="part"
                  id="gryasi"
                  d="m 630.16498,407.72399 -13.03501,16.661 1.11201,9.9e-4 6.03,17.68 13.047,-1.56299 5.995,8.363 -8.501,13.601 4.891,3.40199 18.569,-6.801 33.663,21.42101 -7.82101,20.266 3.87701,8.15999 -9.657,10.881 v 10.881 l -7.481,6.12 4.761,8.50101 -17.002,19.04099 2.72099,5.101 -5.78099,4.08 -13.259,-7.821 -13.943,5.441 -17,-9.862 -15.641,8.501 -10.881,-11.901 v -8.841 l -30.26299,2.381 -10.2,3.74 -20.40101,-1.7 -7.821,7.48 -15.30099,-4.08 -15.301,12.581 -7.48201,-9.24799 1.36001,-6.39301 -5.44,-11.288 5.77999,-5.577 15.029,8.5 10.201,-4.555 3.4,0.476 4.35301,-9.045 -12.03701,-14.554 15.845,-12.444 -7.208,-20.605 -6.121,-4.21699 1.76901,-12.581 15.91199,10.405 4.55801,-3.80801 -1.156,-6.59699 17.68099,-8.569 7.68401,6.801 9.99599,-4.828 -11.306,-26.17801 3.35,-9.389 -2.584,-8.297 -0.341,-10.53999 -5.032,-7.685 0.95201,-11.084 13.12499,-6.393 5.238,3.673 -5.033,6.52799 1.837,3.19701 17.205,-1.837 6.12,-4.284 10.88,3.19599 7.958,-1.35999 15.505,7.005 1.724,4.07999 z"
                />
                <path
                  @click="index = 17, activeMap($event)"
                  class="part"
                  id="dolgorukogo"
                  ref="inst1map"
                  d="m 282.887,588.483 4.42,-8.161 -21.081,-22.101 -5.1,-27.542 2.72,-8.161 -3.74,-5.1 -22.442,13.941 -6.801,-6.461 -11.9,5.781 -20.402,-9.521 -3.4,-5.441 -13.601,-5.1 6.46,-19.381 -32.982,2.38 -3.74,-4.761 -13.261,1.701 -5.441,6.46 v 27.202 l -23.802,-8.841 -15.6406,4.081 -3.7403,11.969 0.34,-0.272 3.7403,21.761 14.6206,10.201 -1.863,12.535 11.384,5.894 10.201,-8.024 5.1,6.12 -5.44,6.121 7.82,30.602 5.441,-1.7 7.82,7.48 v -21.081 l 13.601,-5.101 26.522,10.881 4.421,-1.36 5.1,4.42 -2.38,7.141 0.68,7.82 19.381,6.801 12.921,-15.981 12.921,7.82 5.781,-8.5 8.5,5.1 19.382,-7.821 11.9,-18.701 z"
                />
                <!-- <path
                @click="index = 12, show_greenfield = false"
                  class="part"
                  id="volovo"
                  d="M210.49,566.79c-2,0-3.44-.46-4.34-1.4a5.07,5.07,0,0,1-1.15-3.94,8.63,8.63,0,0,0-1.26-5.1c-1.5-2.4-2.89-4.92-4.23-7.36-3.31-6-6.73-12.22-12-17-1.77-1.58-2.66-3.81-2.7-6.81s0-5.7,0-8.26v-.43c0-.91,0-1.93.57-2.46,3.39-3.06,3.6-6.93,3.81-11a32.84,32.84,0,0,1,.61-5.5,39,39,0,0,0,.75-6.68c.05-.85.1-1.7.17-2.55a4,4,0,0,0-.63-3.19,3,3,0,0,0-.91-.6c-.84-.45-2.13-1.12-1.34-2.86l.05-.11c.91-2,2-4.5,4.78-4.88,3.63-.51,5.16-3,6.28-5.54s2.49-5.72,6.5-6.2c1.32-.16,2.07-1.52,2.67-2.78a8.31,8.31,0,0,1,7.93-5,19.4,19.4,0,0,0,9.07-2.52c2.61-1.33,4.71-1.22,6.79.38a5.88,5.88,0,0,0,2.89,1.21l.46.06v.46a44.06,44.06,0,0,1-1.24,7.53c-.91,4.13-1.86,8.4-.55,11.26,1.53,3.35,5.31,3.3,9.31,3.24a23.68,23.68,0,0,1,5.73.38l.65.17-.35.57c-.5.84-1.08,1.68-1.7,2.56-1.7,2.45-3.46,5-3.42,7.31,0,1.42,1.2,2.19,2.44,3s2.89,1.91,2.76,3.91A5.49,5.49,0,0,1,248,499a3.34,3.34,0,0,0-.55,2.53,5.91,5.91,0,0,0,2,2.83,9.52,9.52,0,0,0,3.3,1.58,11.65,11.65,0,0,1,3.2,1.45c3,2.15,2.55,6.36,2.25,9.43l0,.35c-.16,1.66-.48,3.29-.79,4.87-1.15,5.8-2.05,10.37,5,12.92a54.65,54.65,0,0,0,17.19,2.86c.86,0,1.9,0,3-.06,4.31-.18,9.68-.4,12.09,2.81l.43.43-.54.33c-3.09,1.88-5.81,4.93-8.54,9.6a11.62,11.62,0,0,1-10.28,6.15c-.94,0-2,0-2.28.63-1.72,3.77-4.66,2.78-7,2l-.27-.09c-6.49-2.16-11.56-1.06-16,3.46-2.38,2.44-5.82,3.73-10,3.73h-9.52c-6.59,0-13.4,0-20.1,0Z"
                />-->
                <path
                  @click="index = 13, activeMap($event), show_greenfield = false"
                  class="part"
                  id="terbuny"
                  d="m 308.388,642.887 -14.281,6.46 v -14.621 l -2.72,-10.881 -10.201,2.72 -4.08,-3.74 4.08,-5.78 -5.78,-4.761 -19.382,7.821 -8.5,-5.1 -5.781,8.5 -12.921,-7.82 -12.921,15.981 -19.381,-6.801 -0.68,-7.82 2.38,-7.141 -5.1,-4.42 -4.421,1.36 -26.522,-10.881 -13.601,5.1 v 21.082 l -7.82,-7.481 -5.441,1.701 -7.82,-30.603 5.44,-6.12 -5.1,-6.121 -10.201,8.025 -8.501,-4.284 -2.883,-0.976 -0.634,9.476 -2.943,17.138 -11.2209,25.365 v 8.501 l 22.1019,2.72 1.7,5.781 -3.74,5.1 7.14,18.701 19.042,2.041 -13.941,9.52 3.74,22.102 14.961,8.161 h 10.201 l 13.329,7.208 0.952,-2.652 9.18,1.36 5.441,-6.121 21.081,-1.7 4.421,-6.8 11.56,0.68 28.222,-23.122 4.421,4.421 5.1,-4.421 8.501,9.181 7.82,-11.221 3.401,-15.301 9.52,3.4 v 18.022 l 19.042,9.86 4.76,-7.48 -8.161,-4.081 14.281,-16.661 9.181,0.204 v -11.901 z"
                />
                <path
                  @click="index = 14, activeMap($event), show_greenfield = false"
                  class="part"
                  id="hlevnoe"
                  d="m 324.70999,665.66598 v -11.901 l -16.321,-10.881 14.145,-9.72301 5.645,-12.24099 22.237,-10.881 9.52099,-2.516 -5.64499,-15.165 -1.63201,-7.957 7.277,-7.20799 12.445,2.72 12.92101,-6.39301 18.633,-3.60399 4.07999,-14.757 7.208,9.11199 8.84001,-7.957 8.63699,1.36 h 11.561 l 4.624,13.261 5.373,2.584 6.12001,-5.644 8.841,7.957 v 9.044 l 4.76099,3.4 -5.44,7.277 -9.31699,-2.992 -1.56401,6.59601 7.481,24.68599 0.88401,19.041 -9.04501,14.077 -1.564,10.74499 -18.497,-9.38499 -10.20099,9.521 -22.408,0.68099 6.81299,8.161 -4.12699,4.41901 -15.631,1.70199 -6.132,10.88001 6.132,9.521 -6.81001,5.099 -17.68099,0.33999 -34.44301,-42.842 z"
                />
                <path
                  @click="index = 12, activeMap($event), show_greenfield = false"
                  class="part"
                  id="volovo"
                  d="m 41.510198,647.10198 -17.373499,51.00399 24.868,19.04101 10.900998,33.322 12.6043,4.76099 32.361993,1.7 3.407,-7.48099 17.714,-4.76001 v -9.52099 l 14.98901,-3.40001 2.385,5.78 16.692,-1.69999 5.92699,-17.748 -13.329,-7.208 H 142.456 l -14.961,-8.161 -3.74001,-22.102 13.94101,-9.52 -19.042,-2.04101 -7.14,-18.70099 3.74,-5.10001 -1.70001,-5.78099 -22.101893,-2.72 v -8.501 l 11.220903,-25.365 -9.723603,-5.442 -19.7581,6.121 -9.538399,12.581 h -8.8571 l -10.901,17.681 -6.472499,-3.74 -5.791101,9.86 z"
                />
                <path
                  @click="index = 15, activeMap($event), show_greenfield = false"
                  class="part"
                  id="usman"
                  d="m 455.41596,667.70595 32.69502,4.21802 13.96701,22.10101 -6.81301,16.32099 76.989,21.76201 5.791,-5.78001 14.307,5.78001 14.649,-11.561 1.703,-7.14 15.33,-5.781 5.109,8.161 15.671,4.08 11.923,-4.42001 2.384,-11.90099 10.375,-8.50201 4.07999,-5.23599 v -12.24101 l -4.07999,-5.101 4.07999,-6.79999 -4.07999,-10.201 -7.481,-6.12 4.08,-4.08101 -4.08,-24.14099 -19.721,-11.561 13.259,-36.042 -13.261,-7.821 -13.941,5.441 -17.001,-9.861 -15.641,8.501 -10.88,-11.902 -10e-4,-8.83999 -30.26199,2.37999 -10.2,3.74 -20.40101,-1.7 -7.821,7.48 -15.302,-4.079 -15.301,12.581 -5.099,12.24001 -11.22099,3.19599 4.75999,3.4 -5.44,7.277 -9.31699,-2.992 -1.56401,6.59601 7.481,24.68599 0.88401,19.041 -9.04501,14.077 z"
                />
                <path
                  @click="index = 16, activeMap($event), show_greenfield = false"
                  class="part"
                  id="dobrinka"
                  d="m 691.93697,480.48798 v 18.362 l 26.45901,1.36101 3.74699,8.16099 -10.56099,12.921 3.748,12.921 56.88899,12.241 v 10.2 l 10.561,-2.72 9.19701,9.52101 -4.769,12.92099 7.83499,7.48 13.96701,-9.52 38.83499,34.342 -10.90099,13.261 -14.98901,-22.442 -11.923,11.901 7.154,14.62099 -12.94499,8.50101 -7.57601,21.08 7.82001,6.121 0.77799,19.042 -16.011,8.841 -6.188,27.88099 -12.92099,3.06 -41.187,-6.45899 -4.376,13.939 -23.80201,-20.061 -19.722,6.46 -9.671,-7.81901 -1.88899,-11.562 4.07999,-5.23599 v -12.24101 l -4.07999,-5.101 4.07999,-6.79999 -4.07999,-10.201 -7.481,-6.12 4.08,-4.08101 -4.08,-24.14099 -19.721,-11.561 13.25898,-36.04202 5.78101,-4.07998 -2.72101,-5.10102 17.00202,-19.04097 -4.76102,-8.50103 7.48102,-6.11998 v -10.881 l 9.657,-10.881 -3.87704,-8.16001 z"
                />
              </svg>
              <img src='image/lipetsk_map.svg' class='svg' @load='action'> 
              <!-- <img src="image/lipetsk_map.svg" class="svg" /> -->
            </div>
          </div>
        </transition>
        <div class="right_map">
          <div class="right_wrapper">
            <div class="input_list" v-if="right == false && show_greenfield == false">
              <div class="class">
                <p class="list">
                  Список площадок —
                  <span>{{regionName}}</span>
                </p>
                <div class="square_button" @click="medium =! medium">Подобрать площадку</div>
              </div>
            </div>
            <div v-if="show_greenfield == false">
              <div v-if="show_greenfield == false">
                <q-scroll-area
                  v-if="show_greenfield == false && right == false"
                  dark
                  :visible="visable"
                  class="square_scroll"
                >
                  <q-form @submit="onSubmit" class="form">
                    <div style="display:flex; flex-direction:column;">
                      <p style="opacity:0.9;">Выберите тип площадки</p>
                      <select v-model="type">
                        <option hidden value="1">Тип площадки</option>
                        <option value="greenfield">Гринфилд</option>
                        <option value="brownfield">Браунфилд</option>
                        <option value>Все</option>
                      </select>
                    </div>
                    <button class="more" type="submit">Поиск</button>
                  </q-form>
                  <div class="items_greenfield" v-if="show_greenfield == false">
                    <div v-if="show_oez">
                      <p class="square_name__territory">{{regionType}}</p>
                      <div class="green">
                        <div
                          class="greenfield_border"
                          v-for="item in green.oez"
                          v-if="item.region == index+1"
                          @click="ShowGreenfield(item)"
                        >
                          <div class="square">Участок №{{item.number_territory}}</div>
                          <div class="border"></div>
                    <div class="square_number">
                     <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Площадь:</span>
                          </div>
                          <div class="inside_square">{{item.square}} ГА</div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Тип участка:</span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'">Гринфилд</span>
                              <span v-if="item.type == 'brownfield'">Браунфилд</span></div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Форма собственности:</span>
                          </div>
                          <div class="inside_square">
                            <span class="usefull_inside" v-if="item.desired == 'goverment'">Государственная</span>
                             <span class="usefull_inside" v-if="item.desired == 'private'">Частная</span>
                              </div>
                       </div>
                      </div>
                        </div>
                        
                      </div>

                    </div>
                  </div>
                  <div v-if="show_oezru">
                    
                 <p class="square_name__territory">{{oezruType}}</p>
               <div class="green">
                        <div
                          class="greenfield_border"
                          v-for="item in green.oez_ru"
                          v-if="item.region == index+1"
                          @click="ShowGreenfield(item)"
                        >
                          <div class="square">Участок №{{item.number_territory}}</div>
                          <div class="border"></div>
                    <div class="square_number">
                     <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Площадь:</span>
                          </div>
                          <div class="inside_square">{{item.square}} ГА</div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Тип участка:</span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'">Гринфилд</span>
                              <span v-if="item.type == 'brownfield'">Браунфилд</span></div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Форма собственности:</span>
                          </div>
                          <div class="inside_square">
                            <span class="usefull_inside" v-if="item.desired == 'goverment'">Государственная</span>
                             <span class="usefull_inside" v-if="item.desired == 'private'">Частная</span>
                              </div>
                       </div>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                    <div v-if="show_industrial">
                      <p class="square_name__territory"
                      v-if="!show_greenfield && index=='8' || index == '4'" 
                    >Индустриальные парки</p>
                                 <div class="green">
                        <div
                          class="greenfield_border"
                          v-for="item in green.industrial"
                          v-if="item.region == index+1"
                          @click="ShowGreenfield(item)"
                        >
                          <div class="square">Участок №{{item.number_territory}}</div>
                          <div class="border"></div>
                    <div class="square_number">
                     <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Площадь:</span>
                          </div>
                          <div class="inside_square">{{item.square}} ГА</div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Тип участка:</span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'">Гринфилд</span>
                              <span v-if="item.type == 'brownfield'">Браунфилд</span></div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Форма собственности:</span>
                          </div>
                          <div class="inside_square">
                            <span class="usefull_inside" v-if="item.desired == 'goverment'">Государственная</span>
                             <span class="usefull_inside" v-if="item.desired == 'private'">Частная</span>
                              </div>
                       </div>
                      </div>
                        </div>
                        
                      </div>
                      </div>
                      <div  v-if="show_any">
                            <p class="square_name__territory" v-if="!show_greenfield  && territory.any.length != 0">Иные площадки</p>
                                          <div class="green">
                        <div
                          class="greenfield_border"
                          v-for="item in green.any"
                          v-if="item.region == index+1"
                          @click="ShowGreenfield(item)"
                        >
                          <div class="square">Участок №{{item.number_territory}}</div>
                          <div class="border"></div>
                    <div class="square_number">
                     <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Площадь:</span>
                          </div>
                          <div class="inside_square">{{item.square}} ГА</div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Тип участка:</span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'">Гринфилд</span>
                              <span v-if="item.type == 'brownfield'">Браунфилд</span></div>
                       </div>
                             <div class="wrap_number">
                        <div class="number_row">
                          <img src="icons/ploshad.svg" />
                              <span>Форма собственности:</span>
                          </div>
                          <div class="inside_square">
                            <span class="usefull_inside" v-if="item.desired == 'goverment'">Государственная</span>
                             <span class="usefull_inside" v-if="item.desired == 'private'">Частная</span>
                              </div>
                       </div>
                      </div>
                        </div>
                        
                      </div> 
                        </div>
                </q-scroll-area>
              </div>
            </div>
            <div class="q-scroll" >
               <q-btn color="white"  v-if="show_greenfield == true"
                @click="show_greenfield = false" flat icon="keyboard_backspace"  label="Вернуться назад" no-caps />
                    <h3
                class="title"
                v-if="show_greenfield == true"
                @click="show_greenfield = true"
              >Участок № {{greenfield.number_territory}}</h3>
                   <q-scroll-area
                dark
                class="bg-dark text-white rounded-borders"
                style="height: 80vh; max-width: 90%;"
                v-if="show_greenfield == true"
              >
                  <div class="greenfield_image" ref="grinf" @click="modalImage">
                  <img
                    :src="greenfield.image"
                    class="greenfield_inside"
                    v-if="show_greenfield == true"
                  />
                  </div>
                    <div class="contain_qscroll">
                      <div class="table" v-if="show_greenfield == true">
                    <p class="gr">Площадь:</p>
                    <p class="cadastr">{{greenfield.square}} ГА</p>
                  </div>
                         <div class="table" v-if="show_greenfield == true">
                    <p class="gr">Тип участка:</p>
                    <p class="cadastr">
                      <span v-if="greenfield.type == 'greenfield'">Гринфилд</span>
                      <span v-if="greenfield.type == 'brownfield'">Браунфилд</span>
                    </p>
                  </div>
                        <div class="table" v-if="show_greenfield == true">
                    <p class="gr">Кадастровый номер:</p>
                    <p class="cadastr">{{greenfield.number}}</p>
                  </div>
                  <div class="table" v-if="show_greenfield == true">
                     <p class="earth" v-if="show_greenfield == true">{{greenfield.earth}}</p>
                  <p class="text_earth" v-if="show_greenfield == true" v-html="greenfield.description">{{greenfield.description}}</p>
                  </div>
                  
                  <div class="inside_greenfield" v-if="show_greenfield == true">
               <div class="item_greend">
                   <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/approval 1.svg" />
                        </div>
                        <p class="usefull">Вид разрешенного использования</p>
                      </div>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '0'"
                      >Для сельского назначения</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '1'"
                      >Для населенных пунктов</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '2'"
                      >Для промышленности</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '3'"
                      >Для Земли для энергетики</span>
                      <span class="usefull_inside" v-if="greenfield.category == '4'">Для транспорта</span>
                      <span class="usefull_inside" v-if="greenfield.category == '5'">Для связи</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '6'"
                      >Для радиовещания</span>
                      <span class="usefull_inside" v-if="greenfield.category == '7'">Для телевидения</span>
                      <span class="usefull_inside" v-if="greenfield.category == '8'">Для информатики</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '9'"
                      >Для обеспечения космической деятельности</span>
                      <span class="usefull_inside" v-if="greenfield.category == '10'">Для обороны</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '11'"
                      >Для безопасности и иного специального назначения</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '12'"
                      >Для особо охраняемых территорий и объектов</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '13'"
                      >Для лесного фонда</span>
                      <span
                        class="usefull_inside"
                        v-if="greenfield.category == '14'"
                      >Для водного фонда</span>
                 </div>
                             <div class="item_greend">
                   <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/form.svg" />
                        </div>
                        <p class="usefull">Форма сделки</p>
                      </div>
             <span class="usefull_inside">{{greenfield.form.toString()}}</span>
                 </div>
                         <div class="item_greend">
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/square.svg" />
                        </div>
                        <p class="usefull">Площадь</p>
                      </div>
                      <span class="usefull_inside">
                        Земельный участок -
                        <br />
                        {{greenfield.square}} га
                      </span>
                    </div>   
                      <div
                      class="item_greend"
                      v-if="greenfield.water != null && greenfield.water != ''"
                    >
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/water.svg" />
                        </div>
                        <p class="usefull">Водоснабжение</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.water}}</span>
                    </div>
                    <div class="item_greend" v-if="greenfield.gas != '' && greenfield.gas != null">
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/burn.svg" />
                        </div>
                        <p class="usefull">Газоснабжение</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.gas}}</span>
                    </div>
                     <div
                      class="item_greend"
                      v-if="greenfield.power != '' && greenfield.power != null"
                    >
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/energy.svg" />
                        </div>
                        <p class="usefull">Электричество</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.power}}</span>
                    </div>        
           <div
                      class="item_greend"
                      v-if="greenfield.customs_priveleges != '' && greenfield.customs_priveleges != null"
                    >
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/burn.svg" />
                        </div>
                        <p class="usefull">Таможенные льготы:</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.customs_priveleges}}</span>
                    </div>
                    <div class="item_greend" v-if="greenfield.heat!= null && greenfield.heat != ''">
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/burn.svg" />
                        </div>
                        <p class="usefull">Теплоснабжение</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.heat}}</span>
                    </div>                 
        <div
                      class="item_greend"
                      v-if="greenfield.water_out!= null && greenfield.water_out != ''"
                    >
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/burn.svg" />
                        </div>
                        <p class="usefull">Водоотведение</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.water_out}}</span>
                    </div>
                    <div
                      class="item_greend"
                      v-if="greenfield.danger != '' && greenfield.danger!= null"
                    >
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/burn.svg" />
                        </div>
                        <p class="usefull">Класс опасности:</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.danger}}</span>
                    </div>
                     <div
                      class="item_greend"
                      v-if="greenfield.territory_priveleges != '' && greenfield.territory_priveleges != null"
                    >
                      <div class="greend_inside__img">
                        <div class="icon">
                          <img src="image/burn.svg" />
                        </div>
                        <p class="usefull">Льготная стоимость земли/аренды</p>
                      </div>
                      <span class="usefull_inside">{{greenfield.territory_priveleges}}</span>
                    </div>
                     <div
                      v-if="greenfield.nalog != '' && greenfield.nalog != null && greenfield.nalog != ''"
                    >
                      <p
                        class="usefull"
                        style="margin:auto;padding-top:1%;padding-bottom:1%; "
                      >Налоговые льготы:</p>
                      <span class="usefull_inside">{{greenfield.nalog}}</span>
                    </div>

                     </div>
                        </div>
                   </q-scroll-area>
                      </div>
                      <q-dialog
      v-model="medium"
    >
      <q-card style="width: 50%; max-width: 80vw;">
        <q-card-section class="form_container">
        <q-card-section class="card">
          <div class="text-h6"> <b>Подобрать площадку</b></div>
              <q-btn
              v-close-popup
              align="right"
      padding="none"
      color="primary"
      flat
      icon="close"
    />
        </q-card-section>

        <q-card-section class="q-pt-none">
          Отправьте ваши контакты и наши сотрудники свяжутся с вами в ближайшее время 
        </q-card-section>
  <q-card-section class="q-pt-none">
    
         <q-form class='form_square'>
           <div class="wrap_square">
              <div class="column">
           <span><b>ФИО *</b></span>
          
          <q-input class ='input'  filled v-model="name"  lazy-rules placeholder="Введите ФИО"
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите ваше имя']" style="width:100%;" />
        </div>
        <div class="column">
       <span> <b>Организация</b> </span>
       
          <q-input class ='input' filled v-model="organisation" placeholder="Введите название" style="width:100%;" />
       </div>
          </div>
          <div class="wrap_square">
            <div class="column">
            <span> <b>Телефон</b></span>
          <q-input class ='input' type="number" filled v-model="phone" placeholder="Введите телефон" />
          </div>
          <div class="column">
          <span> <b>Email * </b> </span>
          <q-input class ='input'   lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу почту']"
         filled v-model="email" type='email' placeholder="Введите email*" />
          </div>
          </div>
          <div class="wrap_square">
            <div class="column">
              <span > <b>Комментарий </b> </span>
             <q-input
      v-model="comment"
      filled
      
      placeholder="Введите комментарий"
      type="textarea"
      
    />
            </div>
    <span class="comment"> <br>Поля помеченные * обязательны для заполнения
    <br><br>Нажимая на кнопку «Отправить» Вы даёте согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. N 152-ФЗ «О персональных данных»
    </span>
          </div>
         </q-form>
             <q-card-actions align="left" class="bg-white text-teal">
           <q-btn label="Отправить" rounded type ='submit'v-close-popup  no-caps color="cyan-6" @click="submit" style="width:20%; margin-top:5%;" />
        </q-card-actions>
        </q-card-section>

        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="choice text-h2" v-if="right" >
              Выберите район
              <router-view/>
            </div>
               
</div>
          </div>
        </div>
      </div>
  </q-page>
</template>
<style scoped>
@font-face {
  font-family: "Montserrat";
  /* src: url("../assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff"); */
}
* {
  font-family: "Montserrat";
}
.choice {
  font-size: 3vw;
  font-weight: 600;
  opacity: 0.8;
  align-self: center;
  color: white;
}
.form_container {
  margin: auto;
  padding-top: 1.3vw;
  width: 95%;
}
.card {
  display: flex;
  justify-content: space-between;
}
.column {
  width: 48%;
}
.wrap_square {
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}
.comment {
  color: #353535d7;
  align-self: flex-start;
  width: 48%;
  font-size: 0.7vw;
}
.square_name__territory {
  padding: 0;
  margin-bottom: 1%;
  font-size: 1.1vw;
  letter-spacing: 0.01vw;
  font-weight: 600;
}
.contain_qscroll {
  width: 90%;
  margin: auto;
}
.q-scroll {
  margin-top: 4vh;
}
.cadastr {
  font-size: 0.93vw;
}
.icon img {
  width: 100%;
}
.icon {
  height: 5vh;
  width: 15%;
}
.list {
  font-size: 1.3vw;
  font-weight: 600;
  letter-spacing: 0.02vw;
}
.q-scrollarea__thumb {
  background: white !important;
}
.wrap_number {
  margin-right: 1vw;
}
.input_list {
  margin-top: 4.2vh;
  display: flex;
  flex-direction: column;
}
.form {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2vh;
}
.form button {
  margin-left: 3%;
}
.form select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("/statics/image/select.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  background-size: 1.5vh;
  display: flex;
  color: white;
  border: 1px solid #dfdfdf;
  min-height: 4.5vh;
  min-width: 13vw;
  opacity: 0.9;
  font-size: 0.9vw;
  outline: none;
  border-radius: 5px;
  padding-right: 2vw;
  padding-left: 1vw;
}
.more {
  align-self: flex-end;
  min-height: 4.5vh;
  min-width: 8vw;
  outline: none;
  border: none;
  cursor: pointer;
  background: #52a4df;
  color: white;
  border-radius: 4.16226px;
}
.square_button {
  align-self: flex-end;
  height: 4.5vh;
  min-width: 8vw;
  display: flex;
  margin-left: 3%;
  padding-left: 2vw;
  padding-right: 2vw;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background: #52a4df;
  color: white;
  border-radius: 4.16226px;
}
.form_square {
  display: flex;
  flex-direction: column;
}
.form select option {
  color: black;
}
.select-selected {
  color: white;
}
.select-selected:after {
  color: white;
}
.inside_square span {
  font-size: 1vw;
  margin-left: 1vw;
}
.inside_square {
  padding-bottom: 1vw;
}
.item_greend {
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  opacity: 1;
  margin-bottom: 2%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  width: 48%;
}
.greend_inside__img {
  padding: 1vh;
  display: flex;
  flex-direction: row;
}

.item_greend img {
  top: 10%;
  left: 5%;
  height: 50%;
}
.lgoty {
  margin-top: 2%;
}
.number_lgoty {
  margin: 0;
  font-size: 2vw;
  color: #52a4df;
}
.number_row {
  display: flex;
  margin-left: 1vh;
}
.number_row span {
  margin-left: 0.5vw;
  font-size: 1vw;
  opacity: 0.3;
}
.usefull {
  padding: 0;
  margin: 0;
  margin-left: 0.5vw;
  font-size: 0.93vw;
  opacity: 0.5;
  color: white;
}
.usefull_inside {
  color: white;
  opacity: 0.9;
  padding-left: 10%;
  font-size: 0.93vw;
}
.wrapper {
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.green {
  display: flex;
  width: 98%;
  flex-direction: column;
  flex-wrap: wrap;
}
.inside_greenfield {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.greenfield_inside {
  cursor: pointer;
  width: 100%;
}
.earth {
  font-size: 0.93vw;
  font-weight: 500;
  margin-top: 2%;
}
.text_earth {
  width: 90%;
  font-size: 1.04vw;
  opacity: 0.6;
}
.university {
  display: flex;
  flex-direction: column;
}
.university h4 {
  color: white;
  letter-spacing: 0.05vw;
  font-weight: 600;
  margin-top: 4vh;
  font-size: 1.85vw;
  margin-bottom: 4vh;
}
.greenfield_image {
  width: 20%;
  right: 5%;
  cursor: pointer;
  top: 3%;
  position: absolute;
}
.greenfield_image img {
  width: 100%;
}
.back {
  margin-top: 5vh;
  margin-bottom: 1vh;
  font-size: 1vw;
  opacity: 0.5;
  cursor: pointer;
}
.square_number {
  width: 100%;
  padding-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.bg-dark {
  background: rgba(31, 37, 55, 0.7) !important;
}
.title {
  margin: 0;
  font-size: 1.4vw;
  letter-spacing: 0.02vw;
  font-weight: 600;
  padding-right: 0;
}
.border {
  border-bottom: 1px solid white;
  margin-left: 1vh;
  margin-right: 1vh;
  opacity: 0.5;
  margin-bottom: 1vh;
}
.greenfield_border {
  font-size: 1vw;
  display: flex;
  margin-bottom: 1.2%;
  cursor: pointer;
  background: rgba(31, 37, 55, 0.7);
  flex-direction: column;
  width: 96%;
}
.greenfield_border:hover {
  background: rgba(59, 70, 104, 0.7);
}
.active_map {
  opacity: 1 !important;
  fill: #2cccd8 !important;
}
.sub_title {
  margin-top: 2%;
  opacity: 0.5;
}
.wrap {
  display: flex;
  flex-direction: column;
}
.wrap_buttons {
  display: flex;
  width: 40%;
  position: absolute;
  flex-direction: column;
  margin-top: 10vh;
}

.inside_square {
  display: flex;
  justify-content: center;
}
.svg_map {
  left: 0;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  outline: none;
}
.svg {
  width: 100%;
}
.part {
  opacity: 0;
  cursor: pointer;
}
.part:hover {
  opacity: 1 !important;
  fill: #2cccd8 !important;
}
.click {
  opacity: 1 !important;
  fill: #2cccd8 !important;
}
.university button {
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 1vh;
  padding-bottom: 1.2vh;
  margin-bottom: 1vh;
  margin-right: 1vw;
  font-weight: 600;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  max-width: 40%;
  text-align: center;
  justify-content: center;
  z-index: 5;
  letter-spacing: 0.05vw;
  font-size: 0.7vw;
  border-radius: 100px;
  border: 1px solid white;
  cursor: pointer;
  z-index: 999;
  outline: none;
  background: rgba(255, 255, 255, 0.25);
  color: white;
}
.first {
  min-width: 7vw;
}
.square {
  padding: 1vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: #cecece;
}
.right_map {
  width: 50%;
  height: 100%;
  color: #fff;
  position: relative;
}
.left_map {
  position: relative;
  text-align: center;
  display: flex;
  width: 100%;
  margin-left: 5%;
}
.wrapp_container {
  width: 95%;
  margin: auto;
  justify-content: space-between;
  display: flex;
}
.center {
  min-width: 70vw;
  left: 15%;
  position: fixed;
  top: 8%;
  height: 90%;
  overflow: visible !important;
  z-index: 15;
}
.table {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
}
.table p {
  margin: 0;
}
.right_wrapper {
  display: flex;
  flex-direction: column;
}
.gr {
  font-size: 0.93vw;
  opacity: 0.5;
}
.active {
  opacity: 1 !important;
  fill: #8fbedf;
}
.button_active {
  background: #2ccdd8 !important;
  color: white !important;
  box-shadow: 0px 2px 10px #8be0e6;
}
.hide {
  display: none;
}
.class {
  display: flex;
  justify-content: space-between;
}
.square_scroll {
  height: 70vh;
  max-width: 100%;
  margin-top: 9vh;
}
.infinity {
  width: 50%;
}
.div {
  background: url("/image/space.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media screen and (max-width: 900px) {
}
</style>
<style>
</style>
<script>
import headerVue from "../components/header.vue";
// import formsVue from "../components/forms.vue";
let data = {}
export default {
  preFetch({ store }) {
    return store.dispatch("square/getTerritory");
  },
  data() {
    return {
      greenfield: {},
      oez_ppt: [],
      
      any: [],
      squards:{},
      show_any: true,
      organisation: "",
      phone: "",
      comment: "",
      name: "",
      email: "",
      visable: true,
      medium: false,
      oez_button: false,
      industrial_button: false,
      oezru_button: false,
      techno_button: false,
      index: 0,
      region_active: false,
      toggle: true,
      show_oez: true,
      show_industrial: true,
      show_oezru: true,
      button_active: true,
      isActive: false,
      green: {},
      right: true,
      type: "1",
      industrial: [],
      oez: [],
      show_greenfield: false,
      params: "зона",
    };
  },
  components: {
    headerVue,
  },
  methods: {
    modalImage() {
      this.$refs.grinf.classList.toggle("center");
    },
    action(){
      return this.$emit('disableLoading', false)
    },
    onSubmit() {
      const greenfield_url =
        "https://backendinvest.admlr.lipetsk.ru/greenfield/?format=json&type=" +
        this.type;
      let oez_ppt = [];
      let oez = [];
      let industrial = [];
      let any = [];
      
      
      fetch(greenfield_url)
        .then((response) => response.json())
        .then((data) => {
          this.green = data;
       
          for (let i = 0; i < data.length; i++) {
            if (data[i].territory == "oez") {
              oez_ppt.push(data[i]);
            } else if (data[i].territory == "oezru") {
              oez.push(data[i]);
            } else if (data[i].territory == "industrial") {
              industrial.push(data[i]);
            } else if (data[i].territory == "any") {
              any.push(data[i]);
            }
          }
          this.green.any = any;
          this.green.industrial = industrial;
          this.green.oez = oez_ppt;
          this.green.oez_ru= oez;
        })
      
    },
    submit() {
      let data2 = {
        name: this.name,
        organisation: this.organisation,
        phone: this.phone,
        email: this.email,
        comment: this.comment,
        project_id: this.project_id,
      };
      let data = JSON.stringify(data2);
      fetch("https://backendinvest.admlr.lipetsk.ru/request/", {
        method: "POST",
        body: data,
        headers: { "content-type": "application/json" },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          alert("С вами свяжутся");
        });
      this.medium = !this.medium;
    },
    ShowGreenfield(object) {
      (this.show_greenfield = true), (this.greenfield = object);
    },
    activeMap(object) {
      this.show_greenfield = false;
      this.region_active = true;
      let region = object;
      if (region.currentTarget.classList.contains("active_map")) {
        this.right = true;
        for (let i = 0; i < svg.children.length; i++) {
          svg.children[i].classList.remove("active_map");
          this.region_active = false;
        }
      } else if (this.region_active) {
        for (let i = 0; i < svg.children.length; i++) {
          svg.children[i].classList.remove("active_map");
        }
        object.currentTarget.classList.add("active_map");
        this.right = false;
      } else {
        for (let i = 0; i < svg.children.length; i++) {
          svg.children[i].classList.remove("active_map");
        }
      }
    },
    active(event) {
      if (event.target.id == "first") {
        this.oez_button = !this.oez_button;
        this.oezru_button = false;
        this.industrial_button = false;
        this.techno_button = false;
        for (let i = 0; i < svg.children.length; i++) {
          svg.children[i].classList.remove("active");
        }
        if (this.oez_button) {
          gryasi.classList.add("active");
          elec.classList.add("active");

          this.show_oez = true;
          this.show_any = false;
          this.show_oezru = false;
          this.show_industrial = false;
        } else {
          this.show_oez = true;
          this.show_any = true;
          this.show_industrial = true;
          this.show_oezru = true;
        }
      } else if (event.target.id == "second") {
        this.oez_button = false;
        this.oezru_button = !this.oezru_button;
        this.industrial_button = false;
        this.techno_button = false;
        if (this.oezru_button) {
          this.show_oezru = true;
          this.show_oez = false;
          this.show_any = false;
          this.show_industrial = false;
          for (let i = 0; i < svg.children.length; i++) {
            svg.children[i].classList.remove("active");
          }
          dankov.classList.add("active");
          elec.classList.add("active");
          zadonsk.classList.add("active");
          hlevnoe.classList.add("active");
          terbuny.classList.add("active");
          ismalkovo.classList.add("active");
          lev.classList.add("active");
          chaplygin.classList.add("active");
          this.also = false;
        } else {
          for (let i = 0; i < svg.children.length; i++) {
            svg.children[i].classList.remove("active");
            this.show_oez = true;
            this.show_any = true;
            this.show_industrial = true;
          }
        }
        also.style.display = "none";
      } else if (event.target.id == "third") {
        this.oez_button = false;
        this.oezru_button = false;
        this.industrial_button = !this.industrial_button;
        this.techno_button = false;
        if (this.industrial_button) {
          this.show_industrial = true;
          this.show_oezru = false;
          this.show_oez = false;
          this.show_any = false;
          for (let i = 0; i < svg.children.length; i++) {
            svg.children[i].classList.remove("active");
          }
          krasnoe.classList.add("active");
          elec.classList.add("active");
        } else {
          this.show_industrial = true;
          this.show_oezru = true;
          this.show_oez = true;
          this.show_any = true;
          for (let i = 0; i < svg.children.length; i++) {
            svg.children[i].classList.remove("active");
          }
        }
      } else if (event.target.id == "four") {
        this.oez_button = false;
        this.oezru_button = false;
        this.industrial_button = false;
        this.techno_button = !this.techno_button;
        if (this.techno_button) {
          for (let i = 0; i < svg.children.length; i++) {
            svg.children[i].classList.remove("active");
          }
          this.$refs.lipetsk.classList.add("active");
        } else {
          for (let i = 0; i < svg.children.length; i++) {
            svg.children[i].classList.remove("active");
          }
        }
      }
    },
  },
  created(){
    this.green = this.territory

  
  },
  computed: {
    territory() {
      return this.green = this.$store.state.square.square;
    },
    regionName() {
      let region = "";
      if (this.index == "15") {
        region = "Усмань";
      } else if (this.index == "14") {
        region = "Хлевное";
      } else if (this.index == "13") {
        region = "Тербуны";
      } else if (this.index == "12") {
        region = "Волово";
      } else if (this.index == "11") {
        region = "Грязи";
      } else if (this.index == "10") {
        region = "Липецк";
      } else if (this.index == "9") {
        region = "Задонск";
      } else if (this.index == "8") {
        region = "Елец";
      } else if (this.index == "7") {
        region = "Измалково";
      } else if (this.index == "6") {
        region = "Доброе";
      } else if (this.index == "5") {
        region = "Лебедянь";
      } else if (this.index == "4") {
        region = "Красное";
      } else if (this.index == "3") {
        region = "Становое";
      } else if (this.index == "2") {
        region = "Чаплыгин";
      } else if (this.index == "1") {
        region = "Лев толстой";
      } else if (this.index == "0") {
        region = "Данков";
      }
      return region;
    },
    regionType() {
      let name = "";
      if (
        (this.show_greenfield == false && this.index == "8") ||this.index == "11") {
        name = "ОЭЗ «Липецк»";
      }
      return name;
    },
    oezruType(){

      let name = ''
             if(!this.show_greenfield && this.index =='0'){
             name = "ОЭЗ РУ «Данков»"
      }
      else if(!this.show_greenfield  && this.index == '9'){
        name = 'ОЭЗ РУ «Задонщина»'
      }
      else if(!this.show_greenfield  && this.index == '7'){
        name = 'ОЭЗ РУ «Измалково»'
      }
      else if(!this.show_greenfield && this.index == '1'){
        name = 'ОЭЗ РУ «Астапово»'
      }
      else if (!this.show_greenfield && this.index == '13'){
        name = 'ОЭЗ РУ «Тербуны»'
      }
        else if (!this.show_greenfield && this.index == '8'){
        name = 'ОЭЗ РУ «Елец»'
      }
          else if (!this.show_greenfield && this.index == '14'){
        name = 'ОЭЗ РУ «Хлевное»'
      }
               else if (!this.show_greenfield && this.index == '2'){
        name = 'ОЭЗ РУ «Чаплыгинская»'
      }
      return name
    }
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  }
};
</script>