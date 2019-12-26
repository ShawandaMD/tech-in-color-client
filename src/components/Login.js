/*Container component*/

const Login = () => {

  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Email" id="email" name="email" value={this.email} onChange={this.handleChnage}/>
      <input type="text" placeholder="Password" id="password" name="password" value={this.password} onChange={this.handleChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}
