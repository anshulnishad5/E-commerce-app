import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

function Footer ()
{
    return (
        <footer style={ { backgroundColor: '#131921', color: '#d1d5db', paddingTop: '48px', paddingBottom: '24px', marginTop: 'auto' } }>
            <div style={ { maxWidth: '1280px', margin: '0 auto', padding: '0 16px' } }>
                {/* Main Footer Content */ }
                <div style={ { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', paddingBottom: '32px', borderBottom: '1px solid #374151' } }>
                    {/* About Section */ }
                    <div>
                        <h3 style={ { color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' } }>ABOUT</h3>
                        <ul style={ { listStyle: 'none', padding: 0, margin: 0 } }>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>About Us</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Careers</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Press</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Corporate Information</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */ }
                    <div>
                        <h3 style={ { color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' } }>CUSTOMER SERVICE</h3>
                        <ul style={ { listStyle: 'none', padding: 0, margin: 0 } }>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Help Center</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Track Order</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Return & Refund</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Shipping Info</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>FAQ</a></li>
                        </ul>
                    </div>

                    {/* Policy */ }
                    <div>
                        <h3 style={ { color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' } }>POLICY</h3>
                        <ul style={ { listStyle: 'none', padding: 0, margin: 0 } }>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Privacy Policy</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Terms of Use</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Security</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Popular Categories */ }
                    <div>
                        <h3 style={ { color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' } }>POPULAR CATEGORIES</h3>
                        <ul style={ { listStyle: 'none', padding: 0, margin: 0 } }>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Men's Fashion</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Women's Fashion</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Electronics</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Home & Living</a></li>
                            <li style={ { marginBottom: '8px' } }><a href="#" style={ { color: '#d1d5db', textDecoration: 'none', fontSize: '14px' } }>Beauty</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */ }
                    <div>
                        <h3 style={ { color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' } }>CONTACT US</h3>
                        <ul style={ { listStyle: 'none', padding: 0, margin: 0, marginBottom: '24px' } }>
                            <li style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '14px' } }>
                                <Phone size={ 16 } />
                                <span>1800-123-4567</span>
                            </li>
                            <li style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '14px' } }>
                                <Mail size={ 16 } />
                                <span>support@shopeasy778@gmail.com</span>
                            </li>
                            <li style={ { display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px' } }>
                                <MapPin size={ 16 } style={ { marginTop: '4px' } } />
                                <span>123 Commerce St, New York, NY 10001</span>
                            </li>
                        </ul>

                        <h3 style={ { color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' } }>FOLLOW US</h3>
                        <div style={ { display: 'flex', gap: '16px' } }>
                            <a href="#" style={ { color: '#d1d5db' } }>
                                <Facebook size={ 20 } />
                            </a>
                            <a href="#" style={ { color: '#d1d5db' } }>
                                <Twitter size={ 20 } />
                            </a>
                            <a href="#" style={ { color: '#d1d5db' } }>
                                <Instagram size={ 20 } />
                            </a>
                            <a href="#" style={ { color: '#d1d5db' } }>
                                <Youtube size={ 20 } />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Payment & App Section */ }
                <div style={ { padding: '32px 0', borderBottom: '1px solid #374151' } }>
                    <div style={ { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' } }>
                        <div>
                            <h4 style={ { color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '14px', letterSpacing: '0.5px' } }>100% SECURE PAYMENTS</h4>
                            <div style={ { display: 'flex', gap: '12px', flexWrap: 'wrap' } }>
                                <div style={ { background: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#1f2937' } }>VISA</div>
                                <div style={ { background: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#1f2937' } }>Mastercard</div>
                                <div style={ { background: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#1f2937' } }>AMEX</div>
                                <div style={ { background: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#1f2937' } }>PayPal</div>
                            </div>
                        </div>
                        <div>
                            <h4 style={ { color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '14px', letterSpacing: '0.5px' } }>DOWNLOAD OUR APP</h4>
                            <div style={ { display: 'flex', gap: '12px', flexWrap: 'wrap' } }>
                                <div style={ { background: '#2d3748', padding: '10px 16px', borderRadius: '4px', border: '1px solid #4a5568', cursor: 'pointer' } }>
                                    <div style={ { fontSize: '10px', color: '#d1d5db' } }>Get it on</div>
                                    <div style={ { fontWeight: '600', color: 'white', fontSize: '14px' } }>Google Play</div>
                                </div>
                                <div style={ { background: '#2d3748', padding: '10px 16px', borderRadius: '4px', border: '1px solid #4a5568', cursor: 'pointer' } }>
                                    <div style={ { fontSize: '10px', color: '#d1d5db' } }>Download on the</div>
                                    <div style={ { fontWeight: '600', color: 'white', fontSize: '14px' } }>App Store</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */ }
                <div style={ { paddingTop: '24px', textAlign: 'center', fontSize: '14px', color: '#9ca3af' } }>
                    <p style={ { margin: 0 } }>© 2026 ShopEasy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;