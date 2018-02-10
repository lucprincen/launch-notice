export default function({ params, route, redirect }) {
    
    if( route.path === '/' ){
        redirect('301', '/flights');
    }
    
    return false;
}
