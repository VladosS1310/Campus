import React, {useEffect} from "react";

const Payment = () => {

    useEffect(() => {
        return () => {
            document.querySelectorAll('script[src*="/js/m/majex/hotelland_widget_obm/include.js"]')[0].remove();
        }
    });

    return(
        <div className="payment-wrapper">
            <div id="tl-search-form" style={{height: 100+'vh', width: 100+'%'}}>

            </div>
                <script src="">
                        {  (function (window) {
                            const config = {'hltoken': '13749e87421e36fb8dc6ae27c53d54b8c36bab95c96ca0fe938c71bd912050c5', 'a': 'booking', container: '#tl-search-form'};

                            let document = window.document, script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.async = true;
                            script.src = 'https://utes.majex.org/' + 'js/m/majex/hotelland_widget_obm/include.js?' + new URLSearchParams(config).toString();
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                        })(window)}
                </script>
        </div>

    )
}

export default Payment;