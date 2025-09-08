---
layout: post
title:  Symbolic PathFinder Setup (Gradle)
date:   2023-12-20
description: This post includes some valuable hints for <b>building SPF with Gradle</b> and some helpful advice for using it.
tags: spf tutorial
categories: tutorials
toc:
  sidebar: left
---

*This post includes some valuable hints for **building SPF with Gradle** and some helpful advice for using it.*

See also: [SymbolicPathFinder/gradle-build](https://github.com/SymbolicPathFinder/jpf-symbc/tree/gradle-build)

Note that before you start this tutorial, make sure that you have installed Java 8 and Gradle 6.9.

<br>
### 1. Prepare the <code>site.properties</code> file
---

{% highlight shell %}
cd /Users/yannic_noller/.jpf

$ cat site.properties

# SPF
jpf-core = /Users/yannic_noller/repos/spf/jpf-core
jpf-symbc = /Users/yannic_noller/repos/spf/jpf-symbc
extensions = ${jpf-core},${jpf-symbc}
{% endhighlight %}

<br>
<br>
### 2. Make sure to use Java v8
---

{% highlight shell %}
$ java -version
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_292-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.292-b10, mixed mode)
{% endhighlight %}

<br>
<br>
### 3. Make sure to use Gradle 6.9
---

{% highlight shell %}
$ gradle --version
------------------------------------------------------------
Gradle 6.9.4
------------------------------------------------------------

Build time:   2023-02-22 08:43:12 UTC
Revision:     7f9380f27d6dc6a1ee6dfc466b834b0408d0b0c4

Kotlin:       1.4.20
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.9 compiled on September 27 2020
JVM:          1.8.0_292 (AdoptOpenJDK 25.292-b10)
OS:           Mac OS X 10.16 x86_64
{% endhighlight %}

<br>
<br>
### 4. Get the SPF sources
---

{% highlight shell %}
$ git clone https://github.com/SymbolicPathFinder/jpf-symbc.git spf
$ cd spf
$ git checkout -b gradle-build origin/gradle-build
$ git submodule update --init --recursive
{% endhighlight %}

The `spf` folder now contains two subfolders: `jpf-core` and `jpf-symbc`. The `jpf-core` folder contains the core files from JPF and `jpf-symbc` contains the extensions for symbolic execution.

<br>
<br>
### 5. Build jpf-core
---

{% highlight shell %}
$ gradle :jpf-core:buildJars
{% endhighlight %}

<details>
<summary>Build Log</summary>    
{% highlight shell %}
$ gradle :jpf-core:buildJars
jpf-core
jpf-symbc

> Task :jpf-core:compileJava
/Users/yannic_noller/repos/spf/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:21: warning: sun.misc.SharedSecrets is internal proprietary API and may be removed in a future release
import sun.misc.SharedSecrets;
               ^
/Users/yannic_noller/repos/spf/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:22: warning: sun.misc.JavaLangAccess is internal proprietary API and may be removed in a future release
import sun.misc.JavaLangAccess;
               ^
/Users/yannic_noller/repos/spf/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:85: warning: sun.misc.JavaLangAccess is internal proprietary API and may be removed in a future release
   static final JavaLangAccess JLA = SharedSecrets.getJavaLangAccess();
                ^
/Users/yannic_noller/repos/spf/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:85: warning: sun.misc.SharedSecrets is internal proprietary API and may be removed in a future release
   static final JavaLangAccess JLA = SharedSecrets.getJavaLangAccess();
                                     ^
Note: /Users/yannic_noller/repos/spf/jpf-core/src/main/gov/nasa/jpf/vm/choice/PermutationCG.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
4 warnings

> Task :jpf-core:compileClassesJava
/Users/yannic_noller/repos/spf/jpf-core/src/classes/java/lang/ClassLoader.java:29: warning: sun.misc.CompoundEnumeration is internal proprietary API and may be removed in a future release
import sun.misc.CompoundEnumeration;
               ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/java/lang/ClassLoader.java:114: warning: sun.misc.CompoundEnumeration is internal proprietary API and may be removed in a future release
    return new CompoundEnumeration<URL>(resEnum);
               ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/JavaNetAccess.java:32: warning: sun.misc.URLClassPath is internal proprietary API and may be removed in a future release
    URLClassPath getURLClassPath (URLClassLoader ucl);
    ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:52: warning: sun.misc.JavaUtilJarAccess is internal proprietary API and may be removed in a future release
  private static JavaUtilJarAccess javaUtilJarAccess;
                 ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:60: warning: sun.misc.JavaOISAccess is internal proprietary API and may be removed in a future release
  private static JavaOISAccess javaOISAccess;
                 ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:61: warning: sun.misc.JavaObjectInputStreamAccess is internal proprietary API and may be removed in a future release
  private static JavaObjectInputStreamAccess javaObjectInputStreamAccess;
                 ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:82: warning: sun.misc.JavaUtilJarAccess is internal proprietary API and may be removed in a future release
  public static JavaUtilJarAccess javaUtilJarAccess() {
                ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:88: warning: sun.misc.JavaUtilJarAccess is internal proprietary API and may be removed in a future release
  public static void setJavaUtilJarAccess(JavaUtilJarAccess access) {
                                          ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:142: warning: sun.misc.JavaObjectInputStreamAccess is internal proprietary API and may be removed in a future release
  public static JavaObjectInputStreamAccess getJavaObjectInputStreamAccess() {
                ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:151: warning: sun.misc.JavaObjectInputStreamAccess is internal proprietary API and may be removed in a future release
  public static void setJavaObjectInputStreamAccess(JavaObjectInputStreamAccess access) {
                                                    ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:162: warning: sun.misc.JavaOISAccess is internal proprietary API and may be removed in a future release
  public static void setJavaOISAccess(JavaOISAccess access) {
                                      ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:166: warning: sun.misc.JavaOISAccess is internal proprietary API and may be removed in a future release
  public static JavaOISAccess getJavaOISAccess() {
                ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/sun/misc/SharedSecrets.java:175: warning: sun.misc.JavaObjectInputStreamReadString is internal proprietary API and may be removed in a future release
  public void setJavaObjectInputStreamReadString(sun.misc.JavaObjectInputStreamReadString ignored) {
                                                         ^
/Users/yannic_noller/repos/spf/jpf-core/src/classes/java/lang/System.java:64: warning: sun.misc.VM is internal proprietary API and may be removed in a future release
    sun.misc.VM.saveAndRemoveProperties(properties);
            ^
14 warnings

> Task :jpf-core:compilePeersJava
/Users/yannic_noller/repos/spf/jpf-core/src/peers/gov/nasa/jpf/vm/JPF_java_util_Random.java:32: warning: sun.misc.Unsafe is internal proprietary API and may be removed in a future release
import sun.misc.Unsafe;
               ^
/Users/yannic_noller/repos/spf/jpf-core/src/peers/gov/nasa/jpf/vm/JPF_java_util_Random.java:93: warning: sun.misc.Unsafe is internal proprietary API and may be removed in a future release
  private static Unsafe unsafe;
                 ^
/Users/yannic_noller/repos/spf/jpf-core/src/peers/gov/nasa/jpf/vm/JPF_java_util_Random.java:99: warning: sun.misc.Unsafe is internal proprietary API and may be removed in a future release
      Field singletonField = Unsafe.class.getDeclaredField("theUnsafe");
                             ^
/Users/yannic_noller/repos/spf/jpf-core/src/peers/gov/nasa/jpf/vm/JPF_java_util_Random.java:101: warning: sun.misc.Unsafe is internal proprietary API and may be removed in a future release
      unsafe = (Unsafe)singletonField.get(null);
                ^
4 warnings

> Task :jpf-core:compileTestJava
/Users/yannic_noller/repos/spf/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:34: warning: sun.reflect.Reflection is internal proprietary API and may be removed in a future release
      Class<?> callerCls = sun.reflect.Reflection.getCallerClass(0); // that would be getCallerClass()
                                      ^
/Users/yannic_noller/repos/spf/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:38: warning: sun.reflect.Reflection is internal proprietary API and may be removed in a future release
      callerCls = sun.reflect.Reflection.getCallerClass(1); // foo()
                             ^
/Users/yannic_noller/repos/spf/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:42: warning: sun.reflect.Reflection is internal proprietary API and may be removed in a future release
      callerCls = sun.reflect.Reflection.getCallerClass(2); // bar()
                             ^
/Users/yannic_noller/repos/spf/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:46: warning: sun.reflect.Reflection is internal proprietary API and may be removed in a future release
      callerCls = sun.reflect.Reflection.getCallerClass(3); // callIt()
                             ^
Note: /Users/yannic_noller/repos/spf/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
4 warnings

Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.9.4/userguide/command_line_interface.html#sec:command_line_warnings

BUILD SUCCESSFUL in 8s
15 actionable tasks: 15 executed
{% endhighlight %}
</details>



<br>
<br>
### 6. Build jpf-symbc
---

{% highlight shell %}
$ gradle :jpf-symbc:buildJars
{% endhighlight %}

<details>
<summary>Build Log</summary>    
{% highlight shell %}
$ gradle :jpf-symbc:buildJars
jpf-core
jpf-symbc

> Task :jpf-symbc:compileJava
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.

> Task :jpf-symbc:compileExamplesJava
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.9.4/userguide/command_line_interface.html#sec:command_line_warnings

BUILD SUCCESSFUL in 8s
12 actionable tasks: 12 executed
{% endhighlight %}
</details>


<br>
<br>
### 7. Run Simple Example from the command line
---

*Inside the jpf-symbc folder, run the following command:*

{% highlight shell %}
$ cd jpf-symbc
$ java -Xmx1024m -ea -jar ../jpf-core/build/RunJPF.jar ./src/examples/demo/NumericExample.jpf
{% endhighlight %}

<details>
<summary>Console Output</summary>   
{% highlight shell %}
$ java -Xmx1024m -ea -jar ../jpf-core/build/RunJPF.jar ./src/examples/demo/NumericExample.jpf
symbolic.min_int=-2147483648
symbolic.min_long=-9223372036854775808
symbolic.min_short=-32768
symbolic.min_byte=-128
symbolic.min_char=0
symbolic.max_int=2147483647
symbolic.max_long=9223372036854775807
symbolic.max_short=32767
symbolic.max_byte=127
symbolic.max_char=65535
symbolic.min_double=4.9E-324
symbolic.max_double=1.7976931348623157E308
JavaPathfinder core system v8.0 (rev 134c05e218a4a664faa9ce542fbcd918ec3e1384) - (C) 2005-2014 United States Government. All rights reserved.


====================================================== system under test
demo.NumericExample.main()

====================================================== search started: 20/12/23 5:44 PM
Property Violated: PC is constraint # = 1
((a_1_SYMINT[-2147483648] + b_2_SYMINT[-2147483646]) - CONST_2) == CONST_0
Property Violated: result is  "java.lang.ArithmeticException: div by 0..."
****************************

====================================================== error 1
gov.nasa.jpf.vm.NoUncaughtExceptionsProperty
java.lang.ArithmeticException: div by 0
	at demo.NumericExample.test(NumericExample.java:26)
	at demo.NumericExample.main(NumericExample.java:34)


====================================================== snapshot #1
thread java.lang.Thread:{id:0,name:main,status:RUNNING,priority:5,isDaemon:false,lockCount:0,suspendCount:0}
  call stack:
	at demo.NumericExample.test(NumericExample.java:26)
	at demo.NumericExample.main(NumericExample.java:34)


====================================================== Method Summaries
Inputs: a_1_SYMINT,b_2_SYMINT

demo.NumericExample.test(-2147483648,-2147483646)  --> "java.lang.ArithmeticException: div by 0..."

====================================================== Method Summaries (HTML)
<h1>Test Cases Generated by Symbolic JavaPath Finder for demo.NumericExample.test (Path Coverage) </h1>
<table border=1>
<tr><td>a_1_SYMINT</td><td>b_2_SYMINT</td><td>RETURN</td></tr>
<tr><td>-2147483648</td><td>-2147483646</td><td>"java.lang.ArithmeticException: div by 0..."</td></tr>
</table>

====================================================== results
error #1: gov.nasa.jpf.vm.NoUncaughtExceptionsProperty "java.lang.ArithmeticException: div by 0  at demo.N..."

====================================================== statistics
elapsed time:       00:00:00
states:             new=3,visited=0,backtracked=3,end=0
search:             maxDepth=2,constraints=0
choice generators:  thread=1 (signal=0,lock=1,sharedRef=0,threadApi=0,reschedule=0), data=1
heap:               new=466,released=4,maxLive=0,gcCycles=1
instructions:       6308
max memory:         245MB
loaded code:        classes=85,methods=1648

====================================================== search finished: 20/12/23 5:44 PM
{% endhighlight %}
</details>

<!--
<br>
<br>
### 6. Use SPF inside Eclipse
---

**6.1 Import both projects to Eclipse**<br>
<img src="{{ 'assets/img/spf-setup-ant/import.png' | relative_url }}" width="400" alt="Import projects to Eclipse" />

<br>
**6.2 Run Simple Example**<br>
{% highlight shell %}
src/examples/demo/NumericExample.java
src/examples/demo/NumericExample.jpf
{% endhighlight %}

<img src="{{ 'assets/img/spf-setup-ant/example.png' | relative_url }}" width="550" alt="Example in the SPF repository." />

<img src="{{ 'assets/img/spf-setup-ant/run.png' | relative_url }}" width="400" alt="Run SPF in Eclipse." />

<details>
<summary>Console Output</summary>
{% highlight java %}
    [Console output redirected to file:/Users/yannic/_myfiles/_eclipse/eclipse_spf/Eclipse.app/Contents/MacOS/output]
    symbolic.min_int=-2147483648
    symbolic.min_long=-9223372036854775808
    symbolic.min_short=-32768
    symbolic.min_byte=-128
    symbolic.min_char=0
    symbolic.max_int=2147483647
    symbolic.max_long=9223372036854775807
    symbolic.max_short=32767
    symbolic.max_byte=127
    symbolic.max_char=65535
    symbolic.min_double=4.9E-324
    symbolic.max_double=1.7976931348623157E308
    JavaPathfinder core system v8.0 - (C) 2005-2014 United States Government. All rights reserved.
    
    ====================================================== system under test
    demo.NumericExample.main()
    
    ====================================================== search started: 23/6/22 9:59 AM
    >0
    <=0
    Property Violated: PC is constraint # = 1
    ((a_1_SYMINT[15] + b_2_SYMINT[-13]) - CONST_2) == CONST_0
    Property Violated: result is  "java.lang.ArithmeticException: div by 0..."
    ****************************
    
    ====================================================== error 1
    gov.nasa.jpf.vm.NoUncaughtExceptionsProperty
    java.lang.ArithmeticException: div by 0
    	at demo.NumericExample.test(NumericExample.java:26)
    	at demo.NumericExample.main(NumericExample.java:34)
    
    ====================================================== snapshot #1
    thread java.lang.Thread:{id:0,name:main,status:RUNNING,priority:5,isDaemon:false,lockCount:0,suspendCount:0}
      call stack:
    	at demo.NumericExample.test(NumericExample.java:26)
    	at demo.NumericExample.main(NumericExample.java:34)
    
    ====================================================== Method Summaries
    Inputs: a_1_SYMINT,b_2_SYMINT
    
    demo.NumericExample.test(-50,17)  --> Return Value: --
    demo.NumericExample.test(0,0)  --> Return Value: --
    demo.NumericExample.test(15,-13)  --> "java.lang.ArithmeticException: div by 0..."
    
    ====================================================== Method Summaries (HTML)
    <h1>Test Cases Generated by Symbolic JavaPath Finder for demo.NumericExample.test (Path Coverage) </h1>
    <table border=1>
    <tr><td>a_1_SYMINT</td><td>b_2_SYMINT</td><td>RETURN</td></tr>
    <tr><td>-50</td><td>17</td><td>Return Value: --</td></tr>
    <tr><td>0</td><td>0</td><td>Return Value: --</td></tr>
    <tr><td>15</td><td>-13</td><td>"java.lang.ArithmeticException: div by 0..."</td></tr>
    </table>
    
    ====================================================== results
    error #1: gov.nasa.jpf.vm.NoUncaughtExceptionsProperty "java.lang.ArithmeticException: div by 0  at demo.N..."
    
    ====================================================== statistics
    elapsed time:       00:00:00
    states:             new=5,visited=0,backtracked=5,end=2
    search:             maxDepth=3,constraints=0
    choice generators:  thread=1 (signal=0,lock=1,sharedRef=0,threadApi=0,reschedule=0), data=2
    heap:               new=366,released=20,maxLive=344,gcCycles=3
    instructions:       3132
    max memory:         245MB
    loaded code:        classes=64,methods=1309
    
    ====================================================== search finished: 23/6/22 9:59 AM
{% endhighlight %}
</details>

<br>
### 7. Try Z3 as constraint solver
---

**7.1 → Change configuration to use z3**<br>
{% highlight shell %}
target=demo.NumericExample
classpath=${jpf-symbc}/build/examples
sourcepath=${jpf-symbc}/src/examples
symbolic.method = demo.NumericExample.test(sym#sym)


#symbolic.dp=coral
symbolic.dp=z3
listener = .symbc.SymbolicListener

search.multiple_errors=true
{% endhighlight %}

Will result in an **error**:

{% highlight shell %}
java.lang.UnsatisfiedLinkError: no libz3java in java.library.path
	at java.lang.ClassLoader.loadLibrary(ClassLoader.java:1860)
	at java.lang.Runtime.loadLibrary0(Runtime.java:871)
	at java.lang.System.loadLibrary(System.java:1124)
	at com.microsoft.z3.Native.<clinit>(Native.java:14)
	at com.microsoft.z3.Context.<init>(Context.java:59)
	at gov.nasa.jpf.symbc.numeric.solvers.ProblemZ3$Z3Wrapper.<init>(ProblemZ3.java:75)
	at gov.nasa.jpf.symbc.numeric.solvers.ProblemZ3$Z3Wrapper.getInstance(ProblemZ3.java:69)
	at gov.nasa.jpf.symbc.numeric.solvers.ProblemZ3.<init>(ProblemZ3.java:95)
	at gov.nasa.jpf.symbc.numeric.SymbolicConstraintsGeneral.isSatisfiable(SymbolicConstraintsGeneral.java:98)
	at gov.nasa.jpf.symbc.numeric.PathCondition.simplifyOld(PathCondition.java:393)
	at gov.nasa.jpf.symbc.numeric.PathCondition.simplify(PathCondition.java:340)
	at gov.nasa.jpf.symbc.bytecode.IDIV.execute(IDIV.java:121)
	at gov.nasa.jpf.vm.ThreadInfo.executeInstruction(ThreadInfo.java:1908)
	at gov.nasa.jpf.vm.ThreadInfo.executeTransition(ThreadInfo.java:1859)
	at gov.nasa.jpf.vm.SystemState.executeNextTransition(SystemState.java:765)
	at gov.nasa.jpf.vm.VM.forward(VM.java:1722)
	at gov.nasa.jpf.search.Search.forward(Search.java:579)
	at gov.nasa.jpf.search.DFSearch.search(DFSearch.java:79)
	at gov.nasa.jpf.JPF.run(JPF.java:613)
	at gov.nasa.jpf.JPF.start(JPF.java:189)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at gov.nasa.jpf.tool.Run.call(Run.java:80)
	at gov.nasa.jpf.tool.RunJPF.main(RunJPF.java:116)
{% endhighlight %}

<br>
**7.2 → Set the right java library path to the lib folder where the z3 native libraries are located**<br>
<img src="{{ 'assets/img/spf-setup-ant/config.png' | relative_url }}" width="550" alt="Setting the java library path in the Eclipse Run Configuration." />

* MacOS:
	* Key: DYLD_LIBRARY_PATH
	* Value: /Users/yannic/repositories/jpf-symbc/lib
* Linux:
	* Key: LD_LIBRARY_PATH
* Windows:
	* Key: PATH

<details>
<summary>Successful Run Log</summary>       
{% highlight shell %}
    [Console output redirected to file:/Users/yannic/_myfiles/_eclipse/eclipse_spf/Eclipse.app/Contents/MacOS/output]
    symbolic.min_int=-2147483648
    symbolic.min_long=-9223372036854775808
    symbolic.min_short=-32768
    symbolic.min_byte=-128
    symbolic.min_char=0
    symbolic.max_int=2147483647
    symbolic.max_long=9223372036854775807
    symbolic.max_short=32767
    symbolic.max_byte=127
    symbolic.max_char=65535
    symbolic.min_double=4.9E-324
    symbolic.max_double=1.7976931348623157E308
    JavaPathfinder core system v8.0 - (C) 2005-2014 United States Government. All rights reserved.
    
    ====================================================== system under test
    demo.NumericExample.main()
    
    ====================================================== search started: 23/6/22 10:01 AM
    >0
    <=0
    Property Violated: PC is constraint # = 1
    ((a_1_SYMINT[2] + b_2_SYMINT[0]) - CONST_2) == CONST_0
    Property Violated: result is  "java.lang.ArithmeticException: div by 0..."
    ****************************
    
    ====================================================== error 1
    gov.nasa.jpf.vm.NoUncaughtExceptionsProperty
    java.lang.ArithmeticException: div by 0
    	at demo.NumericExample.test(NumericExample.java:26)
    	at demo.NumericExample.main(NumericExample.java:34)
    
    ====================================================== snapshot #1
    thread java.lang.Thread:{id:0,name:main,status:RUNNING,priority:5,isDaemon:false,lockCount:0,suspendCount:0}
      call stack:
    	at demo.NumericExample.test(NumericExample.java:26)
    	at demo.NumericExample.main(NumericExample.java:34)
    
    ====================================================== Method Summaries
    Inputs: a_1_SYMINT,b_2_SYMINT
    
    demo.NumericExample.test(-2147483648,-2147483648)  --> Return Value: --
    demo.NumericExample.test(0,3)  --> Return Value: --
    demo.NumericExample.test(2,0)  --> "java.lang.ArithmeticException: div by 0..."
    
    ====================================================== Method Summaries (HTML)
    <h1>Test Cases Generated by Symbolic JavaPath Finder for demo.NumericExample.test (Path Coverage) </h1>
    <table border=1>
    <tr><td>a_1_SYMINT</td><td>b_2_SYMINT</td><td>RETURN</td></tr>
    <tr><td>-2147483648</td><td>-2147483648</td><td>Return Value: --</td></tr>
    <tr><td>0</td><td>3</td><td>Return Value: --</td></tr>
    <tr><td>2</td><td>0</td><td>"java.lang.ArithmeticException: div by 0..."</td></tr>
    </table>
    
    ====================================================== results
    error #1: gov.nasa.jpf.vm.NoUncaughtExceptionsProperty "java.lang.ArithmeticException: div by 0  at demo.N..."
    
    ====================================================== statistics
    elapsed time:       00:00:00
    states:             new=5,visited=0,backtracked=5,end=2
    search:             maxDepth=3,constraints=0
    choice generators:  thread=1 (signal=0,lock=1,sharedRef=0,threadApi=0,reschedule=0), data=2
    heap:               new=366,released=20,maxLive=344,gcCycles=3
    instructions:       3132
    max memory:         245MB
    loaded code:        classes=64,methods=1309
    
    ====================================================== search finished: 23/6/22 10:01 AM
{% endhighlight %}
</details>    

<br>
**7.3 Simple Example with Z3 in the command line**<br>
*You can also run SPF from the command line with setting the java library path. For example (macOS):*

{% highlight shell %}
DYLD_LIBRARY_PATH=/Users/yannic/repositories/jpf-symbc/lib/ \
  /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home/bin/java \
    -Xmx1024m -ea \
    -jar ../jpf-core/build/RunJPF.jar \
    src/examples/demo/NumericExample.jpf
{% endhighlight %}

<details>
<summary>Console Output</summary>   
{% highlight shell %}
    yannic@Yannics-MacBook-Pro jpf-symbc % DYLD_LIBRARY_PATH=/Users/yannic/repositories/jpf-symbc/lib/ \
      /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home/bin/java \
        -Xmx1024m -ea \
        -jar ../jpf-core/build/RunJPF.jar \
        src/examples/demo/NumericExample.jpf
    symbolic.min_int=-2147483648
    symbolic.min_long=-9223372036854775808
    symbolic.min_short=-32768
    symbolic.min_byte=-128
    symbolic.min_char=0
    symbolic.max_int=2147483647
    symbolic.max_long=9223372036854775807
    symbolic.max_short=32767
    symbolic.max_byte=127
    symbolic.max_char=65535
    symbolic.min_double=4.9E-324
    symbolic.max_double=1.7976931348623157E308
    JavaPathfinder core system v8.0 - (C) 2005-2014 United States Government. All rights reserved.
    
    ====================================================== system under test
    demo.NumericExample.main()
    
    ====================================================== search started: 23/6/22 11:38 AM
    >0
    <=0
    Property Violated: PC is constraint # = 1
    ((a_1_SYMINT[2] + b_2_SYMINT[0]) - CONST_2) == CONST_0
    Property Violated: result is  "java.lang.ArithmeticException: div by 0..."
    ****************************
    
    ====================================================== error 1
    gov.nasa.jpf.vm.NoUncaughtExceptionsProperty
    java.lang.ArithmeticException: div by 0
    	at demo.NumericExample.test(NumericExample.java:26)
    	at demo.NumericExample.main(NumericExample.java:34)
    
    ====================================================== snapshot #1
    thread java.lang.Thread:{id:0,name:main,status:RUNNING,priority:5,isDaemon:false,lockCount:0,suspendCount:0}
      call stack:
    	at demo.NumericExample.test(NumericExample.java:26)
    	at demo.NumericExample.main(NumericExample.java:34)
    
    ====================================================== Method Summaries
    Inputs: a_1_SYMINT,b_2_SYMINT
    
    demo.NumericExample.test(-2147483648,-2147483648)  --> Return Value: --
    demo.NumericExample.test(0,3)  --> Return Value: --
    demo.NumericExample.test(2,0)  --> "java.lang.ArithmeticException: div by 0..."
    
    ====================================================== Method Summaries (HTML)
    <h1>Test Cases Generated by Symbolic JavaPath Finder for demo.NumericExample.test (Path Coverage) </h1>
    <table border=1>
    <tr><td>a_1_SYMINT</td><td>b_2_SYMINT</td><td>RETURN</td></tr>
    <tr><td>-2147483648</td><td>-2147483648</td><td>Return Value: --</td></tr>
    <tr><td>0</td><td>3</td><td>Return Value: --</td></tr>
    <tr><td>2</td><td>0</td><td>"java.lang.ArithmeticException: div by 0..."</td></tr>
    </table>
    
    ====================================================== results
    error #1: gov.nasa.jpf.vm.NoUncaughtExceptionsProperty "java.lang.ArithmeticException: div by 0  at demo.N..."
    
    ====================================================== statistics
    elapsed time:       00:00:00
    states:             new=5,visited=0,backtracked=5,end=2
    search:             maxDepth=3,constraints=0
    choice generators:  thread=1 (signal=0,lock=1,sharedRef=0,threadApi=0,reschedule=0), data=2
    heap:               new=366,released=20,maxLive=344,gcCycles=3
    instructions:       3132
    max memory:         245MB
    loaded code:        classes=64,methods=1309
    
    ====================================================== search finished: 23/6/22 11:38 AM
{% endhighlight %}
</details>

-->

<br>
<br>
### 8. Contact
---
If you have any issues with these instructions, please send an email to [Yannic Noller](mailto:yannic.noller@acm.org).
