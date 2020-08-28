const jwt = require("jsonwebtoken");

const middlewareJWT = (req, res, next) => {
    let idToken;
    if (
        req.headers.authorization &&
        req.headers.authorization.startWith("Bearer ")
    ) {
        idToken = req.headers.authorization.split("Bearer ")[1];
    } else {
        console.error("No Token Found");
        res.status(403).json({ error: "Unauthorized" });
    }

    const decoded = jwt.verify(idToken, process.env.JWT_SECRET);
    console.log(decoded);
    /*

const now = Math.floor(Date.now() / 1000);
        if( decoded.exp - now < 60 * 60 * 24 * 3.5){
            const user = await User.findById(decoded._id)
            const token = user.generateToken();
            ctx.cookies.set('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7dlf
                httpOnly : true,
            });
        }

    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
        store.dispatch(logoutUser())
        window.location.href = '/login'
    }else{
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
    
    */
};

module.exports = middlewareJWT;
