import { type FC } from 'react';
import { type BetPlaceProps } from '../OddsData';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './betplace.scss'


interface Props {
    open: boolean;
    handleClose: any;
    betPlaceData: BetPlaceProps
}


const BetPlaced: FC<Props> = ({ handleClose, open, betPlaceData }) => {
    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ maxWidth: 532, margin: "auto", padding: "0" }}
            >
                <DialogTitle sx={{ bgcolor: betPlaceData?.isBack ? '#56baec' : '#f294a8', fontSize: "16px" }}>
                    {betPlaceData?.name}
                    <span onClick={handleClose} className="close">×</span>
                </DialogTitle>
                <DialogContent sx={{ bgcolor: betPlaceData?.isBack ? '#56baec' : '#f294a8', py: 0 }}>
                    <div className="popup">
                        <div className="content">
                            <input type='number' />
                            <ul>
                                <li><button className="btn">100</button></li>
                                <li><button className="btn">200</button></li>
                                <li><button className="btn">500</button></li>
                                <li><button className="btn">1000</button></li>
                                <li><button className="btn">2000</button></li>
                                <li><button className="btn">5000</button></li>
                                <li><button className="btn">10000</button></li>
                                <li><button className="btn">20000</button></li>
                                <li><button className="btn">25000</button></li>
                                <li><button className="btn">50000</button></li>
                                <li><button className="btn">10000</button></li>
                                <li><button className="btn red-btn">C</button></li>
                            </ul>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions sx={{ bgcolor: betPlaceData?.isBack ? '#56baec' : '#f294a8' }}>
                    <div className="popup-footer">
                        <button onClick={handleClose} className="btn cancel-btn">Cancel</button>
                        <button className="btn submit-btn">Submit</button>
                    </div>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default BetPlaced