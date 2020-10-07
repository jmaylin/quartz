import React, { FC } from 'react';

export interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({ width = 22, height = 22 }: LogoProps) => (
  <svg width={width} height={height} viewBox="0 0 27 27" fill="none">
    <g transform="translate(0,0.45762712)">
      <path
        fill="#ffffff"
        d="m 12.0332,14.964 c 0.294393,0.826748 0.13258,1.594089 1.217287,1.517273 0.821538,0.159609 1.643075,0.319218 2.464613,0.478827 0.228713,-1.053829 1.730499,-0.841767 1.565137,-1.989309 C 17.370487,14.406561 17.460746,13.84233 17.551,13.2781 16.470133,13.34195 15.413091,12.1804 14.650982,12.161933 13.778388,13.095956 12.905794,14.029978 12.0332,14.964 Z M 26.1887,9.81101 C 25.495704,6.1741172 22.83219,3.1805893 19.73396,1.3075006 16.525053,-0.63622122 12.351076,-0.28763152 9.1881049,1.5643963 8.4733262,1.9095596 7.177298,2.6491159 7.97773,3.55699 5.3397326,4.7029565 3.4582224,7.2320574 2.6853116,9.9611834 2.4404655,10.941095 4.3051504,11.160795 2.8820469,11.727555 c -1.772807,1.561423 -3.14087349,3.931972 -2.79909499,6.35932 0.25313312,0.98424 2.24969539,0.494686 1.15942069,1.636619 -0.69753185,1.645308 -0.74757151,3.566279 -0.2746536,5.273506 0.5768337,0.732687 1.6548279,0.508463 2.4803258,0.631 1.3342906,0.02476 2.7430194,-0.214184 3.8526852,-0.989 0.00322,1.755231 1.8335879,1.886093 3.114974,1.441674 1.869885,-0.519514 3.571727,-1.729681 4.645996,-3.344774 0.570047,1.430923 2.116059,0.688015 3.089993,0.179628 1.969005,-0.968483 3.715749,-2.560072 4.581207,-4.598528 1.478747,0.899007 2.054146,-1.557906 2.630459,-2.498795 0.833435,-1.872261 1.104599,-3.980418 0.825341,-6.007195 z m -7.867,3.51299 c -0.240285,0.245357 -0.16388,0.863286 -0.286544,1.247018 0.05408,0.423571 -0.504684,1.234102 0.12233,1.29234 1.421152,0.457392 1.672514,2.606414 0.386459,3.373933 -1.18702,0.877629 -3.056185,-0.137304 -2.968345,-1.610391 -1.166667,-0.226633 -2.333333,-0.453267 -3.5,-0.6799 -0.347491,0.823152 -1.625535,0.738061 -1.207265,1.782402 0.04445,0.608866 0.08891,1.217732 0.133365,1.826598 1.394659,0.104114 2.060189,2.03302 1.0195,2.9724 C 11.087586,24.562512 9.1712925,23.913386 9.0517,22.529 7.89236,22.57467 6.73302,22.62033 5.57368,22.666 5.516283,24.088457 3.5523417,24.801665 2.5976,23.742 1.5822255,22.82394 2.1895512,20.943249 3.54462,20.784 3.576033,19.797333 3.607447,18.810667 3.63886,17.824 2.1140138,17.57112 1.5774326,15.375035 2.8267187,14.453705 3.9041808,13.479804 5.8308374,14.243136 5.95478,15.687 6.7628033,15.7243 7.5708267,15.7616 8.37885,15.7989 8.3284453,14.792284 9.7232188,14.485395 9.1455108,13.502138 8.9132339,12.492425 8.6809569,11.482713 8.44868,10.473 6.9480879,10.591005 5.8930244,8.6887922 6.7881403,7.4787067 7.5875678,6.1323401 9.8492527,6.4699376 10.231126,7.9818159 10.465299,8.31874 11.175472,8.0027617 11.608495,8.066934 12.077264,8.0409526 12.546032,8.0149713 13.0148,7.98899 12.939714,4.9715965 15.844758,2.3521508 18.838463,2.7389263 21.857296,2.9490194 24.187521,6.0998009 23.515625,9.0482512 23.081391,11.477315 20.784551,13.372807 18.3217,13.324 Z M 8.43823,16.4871 C 7.6022133,16.449067 6.7661967,16.411033 5.93018,16.373 5.9103773,17.696104 3.966302,17.388581 4.3046312,18.665269 4.2821875,19.379212 4.2597437,20.093156 4.2373,20.8071 4.8424752,21.33071 5.1700852,20.647566 5.597645,20.265749 6.6428133,19.220533 7.6879817,18.175316 8.73315,17.1301 8.5971745,16.935859 8.4968007,16.716848 8.43823,16.4871 Z M 13.061,8.68311 c -0.920633,0.050983 -1.841267,0.1019667 -2.7619,0.15295 0.04293,1.1032441 -1.6171345,1.225693 -0.9899424,2.296828 0.2239341,0.97407 0.4478683,1.948141 0.6718024,2.922212 0.804735,-0.369899 1.580197,0.865664 2.050468,-0.09791 C 12.794952,13.13916 13.558476,12.32113 14.322,11.5031 13.633469,10.71613 13.188421,9.7210003 13.061,8.68311 Z M 9.21777,17.615 c -1.30794,1.307967 -2.61588,2.615933 -3.92382,3.9239 0.068588,0.860309 0.7450816,0.654872 1.3808433,0.629115 C 7.4684989,22.136677 8.2622044,22.105338 9.05591,22.074 8.9982882,20.895686 10.721246,20.94342 10.264608,19.793566 10.220339,19.182677 10.176069,18.571789 10.1318,17.9609 9.8044817,17.924834 9.486965,17.804658 9.21777,17.615 Z"
      />
    </g>
  </svg>
);

export default Logo;