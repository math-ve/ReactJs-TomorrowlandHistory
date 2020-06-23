import React, { useEffect, useLayoutEffect, useState } from 'react';
import {gsap, ScrollTrigger } from "gsap/all";

const TimeLine = (props) => {

    const { year, tl, scroll } = props;

    const handleClick = (yearTo) => {
        const scrollBase = 68023;
        const scrollDiff = 16105;
        if (yearTo === "2005") {
            window.scroll(0, scrollBase);
            tl.seek('timeline-2005')              
        }
        else if (yearTo === "2006")
        {
            window.scroll(0, (scrollBase + scrollDiff));
            tl.seek('timeline-2006')            
        }
        else if (yearTo === "2007")
        {
            window.scroll(0, (scrollBase + scrollDiff * 2));
            tl.seek('timeline-2007')            
        }
        else if (yearTo === "2008")
        {
            window.scroll(0, (scrollBase + scrollDiff * 3));
            tl.seek('timeline-2008')            
        }
        else if (yearTo === "2009")
        {
            window.scroll(0, (scrollBase + scrollDiff * 4));
            tl.seek('timeline-2009')            
        }
        else if (yearTo === "2010")
        {
            window.scroll(0, (scrollBase + scrollDiff * 5));
            tl.seek('timeline-2010')            
        }
        else if (yearTo === "2011")
        {
            window.scroll(0, (scrollBase + scrollDiff * 6 + 1));
            tl.seek('timeline-2011')            
        }
        else if (yearTo === "2012")
        {
            window.scroll(0, (scrollBase + scrollDiff * 7 + 1));
            tl.seek('timeline-2012')            
        }
        else if (yearTo === "2013")
        {
            window.scroll(0, (scrollBase + scrollDiff * 8 + 1));
            tl.seek('timeline-2013')            
        }
        else if (yearTo === "2014")
        {
            window.scroll(0, (scrollBase + scrollDiff * 9 + 1));
            tl.seek('timeline-2014')            
        }
        else if (yearTo === "2015")
        {
            window.scroll(0, (scrollBase + scrollDiff * 10));
            tl.seek('timeline-2015')            
        }
        else if (yearTo === "2016")
        {
            window.scroll(0, (scrollBase + scrollDiff * 11 + 1));
            tl.seek('timeline-2016')            
        }
        else if (yearTo === "2017")
        {
            window.scroll(0, (scrollBase + scrollDiff * 12));
            tl.seek('timeline-2017')            
        }
        else if (yearTo === "2018")
        {
            window.scroll(0, (scrollBase + scrollDiff * 13 + 1));
            tl.seek('timeline-2018')            
        }
        else if (yearTo === "2019")
        {
            window.scroll(0, (scrollBase + scrollDiff * 14 + 1));
            tl.seek('timeline-2019')            
        }
    }

    if (year === "2005")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2005">
                    <div className="timeline timeline-2005">
                        <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005 timeline-active">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006" onClick={() => handleClick("2006")}>
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2006")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2006">
                    <div className="timeline timeline-2006">
                        <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2007")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2007">
                    <div className="timeline timeline-2007">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007">
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2008")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2008">
                    <div className="timeline timeline-2008">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008">
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2009")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2009">
                    <div className="timeline timeline-2009">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009">
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2010")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2010">
                    <div className="timeline timeline-2010">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010">
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2011")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2011">
                    <div className="timeline timeline-2011">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011">
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2012")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2012">
                    <div className="timeline timeline-2012">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012">
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2013")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2013">
                    <div className="timeline timeline-2013">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013">
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2014")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2014">
                    <div className="timeline timeline-2014">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014">
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2015")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2015">
                    <div className="timeline timeline-2015">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015">
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2016")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2016">
                    <div className="timeline timeline-2016">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016">
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2017")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2017">
                    <div className="timeline timeline-2017">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017">
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2018")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2018">
                    <div className="timeline timeline-2018">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018">
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019" onClick={() => handleClick("2019")}>
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (year === "2019")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2019">
                    <div className="timeline timeline-2019">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005" onClick={() => handleClick("2005")}>
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006 timeline-active">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007" onClick={() => handleClick("2007")}>
                                2007
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2008">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2008" onClick={() => handleClick("2008")}>
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009" onClick={() => handleClick("2009")}>
                                2009
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2010">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2010" onClick={() => handleClick("2010")}>
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011" onClick={() => handleClick("2011")}>
                                2011
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2012">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2012" onClick={() => handleClick("2012")}>
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013" onClick={() => handleClick("2013")}>
                                2013
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2014">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2014" onClick={() => handleClick("2014")}>
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015" onClick={() => handleClick("2015")}>
                                2015
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2016">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2016" onClick={() => handleClick("2016")}>
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017" onClick={() => handleClick("2017")}>
                                2017
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2018">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2018" onClick={() => handleClick("2018")}>
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019">
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default TimeLine;