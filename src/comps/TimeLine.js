import React, { useEffect, useLayoutEffect, useState } from 'react';

const TimeLine = (props) => {

    const { year } = props;

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
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2006")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2006">
                    <div className="timeline timeline-2006">
                        <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2007")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2007">
                    <div className="timeline timeline-2007">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
                                2006
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2007">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2007 timeline-active">
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
                            <div className="timeline-year timeline-year-2009">
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
                            <div className="timeline-year timeline-year-2011">
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
                            <div className="timeline-year timeline-year-2013">
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
                            <div className="timeline-year timeline-year-2015">
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
                            <div className="timeline-year timeline-year-2017">
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
                            <div className="timeline-year timeline-year-2019">
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
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008 timeline-active">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2009")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2009">
                    <div className="timeline timeline-2009">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
                                2008
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2009">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2009 timeline-active">
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
                            <div className="timeline-year timeline-year-2011">
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
                            <div className="timeline-year timeline-year-2013">
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
                            <div className="timeline-year timeline-year-2015">
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
                            <div className="timeline-year timeline-year-2017">
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
                            <div className="timeline-year timeline-year-2019">
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
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010 timeline-active">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2011")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2011">
                    <div className="timeline timeline-2011">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
                                2010
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2011">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2011 timeline-active">
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
                            <div className="timeline-year timeline-year-2013">
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
                            <div className="timeline-year timeline-year-2015">
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
                            <div className="timeline-year timeline-year-2017">
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
                            <div className="timeline-year timeline-year-2019">
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
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012 timeline-active">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2013")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2013">
                    <div className="timeline timeline-2013">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
                                2012
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2013">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2013 timeline-active">
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
                            <div className="timeline-year timeline-year-2015">
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
                            <div className="timeline-year timeline-year-2017">
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
                            <div className="timeline-year timeline-year-2019">
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
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014 timeline-active">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2015")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2015">
                    <div className="timeline timeline-2015">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
                                2014
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2015">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2015 timeline-active">
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
                            <div className="timeline-year timeline-year-2017">
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
                            <div className="timeline-year timeline-year-2019">
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
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016 timeline-active">
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
                            <div className="timeline-year timeline-year-2018">
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
    else if (year === "2017")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2017">
                    <div className="timeline timeline-2017">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
                                2016
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2017">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2017 timeline-active">
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
                            <div className="timeline-year timeline-year-2019">
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
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018 timeline-active">
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
    else if (year === "2019")
        return (
            <div className="timeline-main-container">
                <div className="timeline-container timeline-container-2019">
                    <div className="timeline timeline-2019">
                    <div className="timeline-edition timeline-edition-2005">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2005">
                                2005
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2006">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2006">
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
                            <div className="timeline-year timeline-year-2008">
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
                            <div className="timeline-year timeline-year-2010">
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
                            <div className="timeline-year timeline-year-2012">
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
                            <div className="timeline-year timeline-year-2014">
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
                            <div className="timeline-year timeline-year-2016">
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
                            <div className="timeline-year timeline-year-2018">
                                2018
                            </div>
                        </div>
                        <div className="timeline-edition timeline-edition-2019">
                            <div className="timeline-stop"></div>
                            <div className="timeline-year timeline-year-2019 timeline-active">
                                2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default TimeLine;