import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/functions';

const OrderItem = ({order}) => {

    const { orderId, name, image, price, quantity, createdAt, deliveredAt, orderStatus } = order;

    return (
        <Link to={`/orders`} className="flex p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg">
            {/* <!-- image container --> */}
            <div className="w-full sm:w-32 h-20">
                <img draggable="false" className="h-full w-full object-contain" src={image} alt={name} />
            </div>
            {/* <!-- image container --> */}

            {/* <!-- order desc container --> */}
            <div className="flex flex-col sm:flex-row justify-between w-full">

                <div className="flex flex-col gap-1 overflow-hidden">
                    <p className="text-sm">{order.product_name.length > 40 ? `${order.product_name.substring(0, 40)}...` : name}</p>
                    <p className="text-xs text-gray-500 mt-2">Quantité: {order.product_quantity}</p>
                    <p className="text-xs text-gray-500">Totale: TND {(order.product_quantity * Number(order.product_price)).toLocaleString()}</p>
                </div>

                <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
                    <p className="text-sm">TND {order.product_price.toLocaleString()}</p>

                    <div className="flex flex-col gap-1.5">
                        <p className="text-sm font-medium flex items-center gap-1">
                            {order.validate_add_or_not === 0 ? (
                                <>
                                    <span className="text-primary-orange pb-0.5">
                                        <CircleIcon sx={{ fontSize: "14px" }} />
                                    </span>
                                    En Attendant
                                </>
                            ) : order.validate_add_or_not === 1 ? (
                                <>
                                    <span className="text-primary-green pb-0.5">
                                        <CircleIcon sx={{ fontSize: "14px" }} />
                                    </span>
                                    onfirmer
                                </>
                            ) : (
                                null
                            )}<>
                            <span className="text-primary-green pb-0.5">
                                <RadioButtonUncheckedIcon sx={{ fontSize: "14px" }} />
                            </span>
                            Commandé(s) le {formatDate(order.date)}
                        </>

                        </p>
                        
                    </div>
                </div>

            </div>
            {/* <!-- order desc container --> */}

        </Link>
    );
};

export default OrderItem;

