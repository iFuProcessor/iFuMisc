import ArrowHeadDef from "../templates/ArrowHeadDef";
import RectWithText from "../templates/RectWithText";
import Arrow from "../templates/Arrow";
import StrokeDashArrow from "../templates/StrokeDashArrow";

const SoC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2880" height="1800">
            <ArrowHeadDef />
            <RectWithText
                id="core"
                text="core"
                x={ 500 } y={ 0 }
                t_x={ 100 } t_y={ 55 }
                width={ 200 } height={ 100 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />

            <RectWithText
                id="main_xbar"
                text="main_xbar"
                x={ 500 } y={ 160 }
                t_x={ 100 } t_y={ 55 }
                width={ 200 } height={ 100 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            {/* core -> main_xbar */ }
            <Arrow
                points={ [[600, 100], [600, 146]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="axi_slave_mux"
                text={ "axi\nslave\nmux" }
                x={ 500 } y={ 320 }
                t_x={ 100 } t_y={ 200 }
                width={ 200 } height={ 600 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            {/* main_xbar -> axi_slave_mux */ }
            <Arrow
                points={ [[600, 260], [600, 306]] }
                color={ [0, 0, 0] }
            />

            {/* left side of axi_slave_mux */ }
            <RectWithText
                id="spi_flash_ctrl"
                text={ "" }
                x={ 240 } y={ 430 }
                t_x={ 100 } t_y={ 45 }
                width={ 200 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <RectWithText
                id="spi_flash_ctrl_inner"
                text={ "spi_flash_ctrl" }
                x={ 245 } y={ 435 }
                t_x={ 95 } t_y={ 40 }
                width={ 190 } height={ 70 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[500, 470], [454, 470]] }
                color={ [0, 0, 0] }
            />
            <StrokeDashArrow
                points={ [[240, 470], [220, 470], [220, 70], [486, 70]] }
                color={ [0, 0, 0] }
            />

            <RectWithText
                id="confreg"
                text={ "" }
                x={ 240 } y={ 580 }
                t_x={ 100 } t_y={ 45 }
                width={ 200 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <RectWithText
                id="confreg_inner"
                text={ "confreg" }
                x={ 245 } y={ 585 }
                t_x={ 95 } t_y={ 40 }
                width={ 190 } height={ 70 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[500, 620], [454, 620]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="apb_bridge"
                text={ "apb\nbridge" }
                x={ 340 } y={ 680 }
                t_x={ 50 } t_y={ 85 }
                width={ 100 } height={ 180 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[500, 770], [454, 770]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="ps2"
                text={ "" }
                x={ 200 } y={ 680 }
                t_x={ 40 } t_y={ 45 }
                width={ 80 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <RectWithText
                id="ps2_inner"
                text={ "ps2" }
                x={ 205 } y={ 685 }
                t_x={ 35 } t_y={ 40 }
                width={ 70 } height={ 70 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[340, 720], [294, 720]] }
                color={ [0, 0, 0] }
            />
            <StrokeDashArrow
                points={ [[200, 720], [180, 720], [180, 30], [486, 30]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="lcd"
                text={ "" }
                x={ 200 } y={ 780 }
                t_x={ 40 } t_y={ 45 }
                width={ 80 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <RectWithText
                id="lcd_inner"
                text={ "lcd" }
                x={ 205 } y={ 785 }
                t_x={ 35 } t_y={ 40 }
                width={ 70 } height={ 70 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[340, 820], [294, 820]] }
                color={ [0, 0, 0] }
            />

            {/* right side of axi_slave_mux */ }
            <RectWithText
                id="ethernet"
                text={ "" }
                x={ 760 } y={ 320 }
                t_x={ 100 } t_y={ 45 }
                width={ 200 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <RectWithText
                id="ethernet_inner"
                text={ "ethernet" }
                x={ 765 } y={ 325 }
                t_x={ 95 } t_y={ 40 }
                width={ 190 } height={ 70 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[700, 360], [746, 360]] }
                color={ [0, 0, 0] }
            />
            <StrokeDashArrow
                points={ [[960, 347], [980, 347], [980, 80], [714, 80]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="abp_dev"
                text={ "" }
                x={ 760 } y={ 440 }
                t_x={ 50 } t_y={ 85 }
                width={ 100 } height={ 180 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <RectWithText
                id="abp_dev_inner"
                text={ "apb\ndev" }
                x={ 765 } y={ 445 }
                t_x={ 45 } t_y={ 80 }
                width={ 90 } height={ 170 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[700, 530], [746, 530]] }
                color={ [0, 0, 0] }
            />
            <StrokeDashArrow
                points={ [[860, 485], [1000, 485], [1000, 60], [714, 60]] }
                color={ [0, 0, 0] }
            />
            <StrokeDashArrow
                points={ [[860, 530], [1020, 530], [1020, 40], [714, 40]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="dma_master"
                text={ "dma_master" }
                x={ 920 } y={ 540 }
                t_x={ 70 } t_y={ 35 }
                width={ 140 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[860, 570], [906, 570]] }
                color={ [0, 0, 0] }
            />
            <StrokeDashArrow
                points={ [[1040, 540], [1040, 20], [714, 20]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="fb_write"
                text={ "fb_write" }
                x={ 760 } y={ 660 }
                t_x={ 70 } t_y={ 35 }
                width={ 140 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[700, 690], [746, 690]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="fb_read"
                text={ "fb_read" }
                x={ 760 } y={ 760 }
                t_x={ 70 } t_y={ 35 }
                width={ 140 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[700, 790], [746, 790]] }
                color={ [0, 0, 0] }
            />
            <RectWithText
                id="tft"
                text={ "tft" }
                x={ 760 } y={ 860 }
                t_x={ 70 } t_y={ 35 }
                width={ 140 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 2 }
                strokeDasharray="none"
            />
            <Arrow
                points={ [[700, 890], [746, 890]] }
                color={ [0, 0, 0] }
            />

            <RectWithText
                id="mig_axi_interconnect"
                text={ "mig_axi_\ninterconnect" }
                x={ 1100 } y={ 160 }
                t_x={ 120 } t_y={ 45 }
                width={ 240 } height={ 100 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            {/* main_xbar -> mig_interconnect */ }
            <Arrow
                points={ [[700, 210], [1086, 210]] }
                color={ [0, 0, 0] }
            />
            {/* eth -> mig_interconnect */ }
            <Arrow
                points={ [[960, 360], [1140, 360], [1140, 276]] }
                color={ [0, 0, 0] }
            />
            {/* dma_master -> mig_interconnect */ }
            <Arrow
                points={ [[1060, 570], [1180, 570], [1180, 276]] }
                color={ [0, 0, 0] }
            />
            {/* fb_write -> mig_interconnect */ }
            <Arrow
                points={ [[900, 690], [1220, 690], [1220, 276]] }
                color={ [0, 0, 0] }
            />
            {/* fb_read -> mig_interconnect */ }
            <Arrow
                points={ [[900, 790], [1260, 790], [1260, 276]] }
                color={ [0, 0, 0] }
            />
            {/* tft -> mig_interconnect */ }
            <Arrow
                points={ [[900, 890], [1300, 890], [1300, 276]] }
                color={ [0, 0, 0] }
            />

            <RectWithText
                id="mig_axi"
                text="mig_axi"
                x={ 1100 } y={ 0 }
                t_x={ 120 } t_y={ 55 }
                width={ 240 } height={ 100 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            {/* mig_interconnect -> mig_axi */ }
            <Arrow
                points={ [[1220, 160], [1220, 114]] }
                color={ [0, 0, 0] }
            />

            <RectWithText
                id="ddr3"
                text=""
                x={ 1400 } y={ 160 }
                t_x={ 120 } t_y={ 55 }
                width={ 240 } height={ 100 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="ddr3_inner"
                text="ddr3"
                x={ 1405 } y={ 165 }
                t_x={ 115 } t_y={ 50 }
                width={ 230 } height={ 90 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [255, 255, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            {/* mig_axi -> ddr3 */ }
            <Arrow
                points={ [[1340, 50], [1520, 50], [1520, 146]] }
                color={ [0, 0, 0] }
            />

        </svg>
    );
}

export default SoC;
