import React from 'react'

import { connect } from 'react-redux'



function Home(props) {
   
    return (
        <React.Fragment>
             <div className="col-xs-1 text-center mt-5">
                <h2 className="mb-5"><b>Welcome To The Notes App</b></h2>
                <img className = "ml-4" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEXZ5Oj///8UHzjopS2bvcYAACXb5+q8xssAACHQ2t8AEC/f6u4AACl1fYenqa4GFjJXX2yIi5MAABzvSEgAFzgACDnvqSzeni7z8/R8XTSeoKhVaXcAABuhxMyVtb8AHDfDxMhwipbc3d+AMD7lRke3O0MAEzAyLzc3PU4ACSz3SknH0tdtdoKqtLsAABfo6escJz4nMEZIUWFia3jPQUW1t7yQk5w/RlgtNku+yc9PY3FEVmaEjpiEoayLqrRthpNBJTpVKDuYNkBrLT2lOEEhITmvOkJtVDSsfTEAEjnAizBFOzYnKjeSbDKZcDMAFDi7NzlOAAAI50lEQVR4nO3da3ubNhgGYEGLjREODk0z13UWx9uo8SE+1Ye06bqu3bq26/r//83ASUCAOBiQXuPo+dDrauLEvvOChI0OSKJlulqPN9uZXCT6CfVXcw+KfqnXnKm6bRXiuTE7/DmUhIXtjqFqhXF36R4EMSTs2HpJPDcHUcWAcDRXSvQdCJEUnppGucCDIPrC9qLkAh4I0RO2Z2U1MMGANzcPwrZc+hF6H+gqPghnrICyfA1LvBcuIoeoZetK3oT+WrBVvBOehhoZTZkv15N6ztwsQ0TQc3En7JlBnz6uY4xreYOb4SMCsoo74TzwN1fHDVxDBRIVQhJdYYc8Rg2jXsxHFQISHWHbJhuYQQMX89GFcERH2CEuto1BrWAB44RgzY0jDLycRnFgjBCqikjqEWehWi98iMYLgbp+JC39d/PauAxgrBCmikgiPq7QG2UA44Ug5yLqq34Jm6WUMCDcBrEAVUQnfkuq3pTQzASFxssrBZiIyL93OSUMCi+udFgiWnhXbFY57UxYeAFcRTT3ntruMBE+DVeRc3OD/GdWJuWchmHhU9gqksI6I2Gkily7fi5C0CryEUaIHM9FTkLAKvISwhG5CSPNDS8iPyFUFTkKgbp+nkKYKnIVgnT9fIUQVeQsBOj6eQv5V5G7kDuRv5B31w8g5FxFCCHfrh9EyLWKrIVvqEKeXT9r4Vu6kGMVmQhv/TuS2xghv66fiZC8IxkD5FdFFsJa3X/t9jtoIgshahB3e+iNKbW5YUNkIsRbYnBHvJBPFdkIx/7tHvsqkci+62cirE2I2szigVyqyESIEHFfNOlM5NH1sxGSh6msvEsmMq4iG2FtpBIvWvt9H2LZ5yKjoxS3yPkaBmQVGQlrN2QRZfs9HJGR0DkT7QDxbdKRyrTrZyVEKPCaZcN+8+7iIutleJlEZkI8McPG2curd7//TM3T98FhxSU2N+xqiG8j8zcMzdbpo8f18ED68qrITojw0pbzp7Sun6EQ4UURYllVZCl0esUiM+FKOheZCp0DtchcqnKqyFaI8Do8vWSfXK8SX3t7tDo5OelNQYUI32zylzFpKnG7s1FURXfbZmPcAxSiGu5Yec/GeGG7qRIdjGYO4o3MhU4Z0Xqm5Jo4HStcqaFW2jBbbTihY6xNlrpiW/ueknHCUzP6WE3uAwrdYxXX18uNrOlqaow0Ib2BNkw6kZPwDolRIz2oZSQLm3FNl01tVfkJswanCE8oh+h9FbdHIZwmdD76+hiEy6QJ2SrlOK2acBo6Ri8D/7Ob1Reekh3h5eUfH5x/iK90qy8kV5S5/PPZcDh8/YEgKtEr2YoJp10C+Hr4zMlw+NEnatHDtGLCld+SXn7aAV3jX94XjU3VhWviNHz2kOEnv4hG1YV+Q3P5cegRX/tCJXIBXl3hL77wV19oCuEBRAiFUAjhI4RCKITwyS70cqTCj795+dsX6quen36lhc57ez8+QibvMZvyqsrCTLleH7tQ7vaPXag1j10ob49eKAsh/wjhoxcabooIa9nuchZYejGrcPbKDwEcuNnmF+JRS06/T63KrVHu9YoyCs9enHt58txDmLuHTYnxu/sJ8eQ626AKqzvJS8wufPKQnwjh7r1FP6+wNso++kcf5TxQQYWBSQYpsfMubwcr3KetnldSSNy9S41ZSeFeg5oqKdzjPMy9UqhoS5kKj78/3F3TGFmuaZY8rmmYCA/nupSZkH3KELa9kVNG6ziF/ug3dXWkwun9FAF7Ud3PS5OFUn+maJZttir8mXeKUJJW4+WpO4L/eIUPEUL+EULmQndSQe5UQYhvbpu5M0EZjNDCpWlruaPMMrzjgBXiRcHtEc0MzwEpxJ0iU0LdGOm7E8AKB4V3Z8vwJKDC2ClHmZO+PQGssPgekPb6sIWb4kdp6gYMVW9p0j8Jh+4tiqyS4M7zPPDeAh1/j/8YrtqO/8qbfYRQCIUQPkIohEIIH2hhtjukMcl0UQMszDhyjx59k+XmPvC7p6wjFegxzAxDUECF+4w2oUdN30US9j3+HiOG4nLY74D3GrlHj5K6Xy2scJ+RezHCA/8kqvBHbQf/iXAJ52HKU4i2VPSHZVzTZBm5V91rmkdwXcohQiiEQggfIRRCIYSPEAqhEMJHCIVQCOEjhEIohPARQiEUQvgIoRAKIXyEUAiFED6PQLjIJvxMFapR4dz7pp57WaBSQ0zjTNxn5pUnPP/ni4+ICjfeN9OnBnIJ9qcaR3dvIvYK+vL1gXj+zfubUDaXQ0vvu9byEIS1kb8+kBrZ0bBPzGL998kd8fy7X0JrGRUS62XmXSWv1OAOUcPoRnFnvvDs1dfdwpcv/LOQtssXWvm/UD2EpoZoaGQ58nKlJjnu7Pm37/99ln8QX7mO7kaKiEWjci8iV2JqI/8vbo2jQnKNK+e0O/txRv7fakV/AknEA/QGeBHJwYGUbeIkiSxxJLStSBFZd/gi1kZEU2LS9hXtJ8yY16LtjCvsEXUHPxPJs9BYUF6v0+nHj4+MdoY7oRR4EOxxim+JdTeoB6mTTdwg1y51Y2dHSDTPsjGoARJxh2xHotvg3aW9pRNj9il3hBL5A9agAXYu4jUJVOjbHbsZUFZYMcyYkrvCwDoChlGHIWIU3Kt5Fgt0ekUz3KLq85hNq3dCaRt4vDpuFFjYMa8PT2aBg89M2hFeGg0CRl2h7QRMCEfBFljTx3WMcY1XnOdqdLbBJlKj9N2B9FoEsRO3sfqDUFqHWmBNnS/XkzqfTDq3C10PHnaGnPCa74neazYGSY+7E0qtSPNk2eSuO0yj25HrlJh90gsIpVnxySIlJqbhLyRsHxKxG99R5Bc6xOLzYUpKJuD+Qqm9KL5GUhkxlMR+ooDQuaaN9KMAUba0dxQlCaXeHLqMVje+6w6lT6yGnFnoXoUXXFSvmM9sZSygG+/H4t6EUIVSe62pME2OoV8v03tBIqv7+Z7WPPFhYaGT3nim6hrPU9LQdNVenKRexoRy2rXchmmeXHeK0Ml0tR5vtjM+vvmgdXoy2pfnpj+eGa20ruV/hmv4Xk/hBCQAAAAASUVORK5CYII='alt="Images of notes"/>
                <br/><br/><br/>

          

                <p>Designed by <b>D Samal</b><br/>We hope you enjoy our website as much as we enjoy offering it to you.<br/>Sincerely,<br/><b>D Samal.</b>[Notes App]</p><br/>

            </div>           
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)