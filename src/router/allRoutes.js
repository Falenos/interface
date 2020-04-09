import React from 'react';

import routes from '.';

import RouteWithSubRoutes from './RouteWithSubRoutes';

const allRoutes = routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
));

const AllRoutes = () => allRoutes;

export default AllRoutes;