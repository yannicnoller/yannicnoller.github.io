---
layout: post
title:  Symbolic PathFinder Setup (Ant)
date:   2022-06-01
description: This post includes some valuable hints for <b>building SPF with Ant</b> and some helpful advice for using it.
tags: spf tutorial
categories: tutorials
toc:
  sidebar: left
---

*This post includes some valuable hints for **building SPF with Ant** and some helpful advice for using it.*

<!-- ---

- [SPF](#spf)
  - [**Make sure to use Java v8**](#make-sure-to-use-java-v8)
  - [Prepare the jpf-core (i.e., JPF)](#prepare-the-jpf-core-ie-jpf)
    - [Get the Java-8 branch for jpf-core](#get-the-java-8-branch-for-jpf-core)
    - [Build jpf-core](#build-jpf-core)
  - [Prepare jpf-symbc (i.e., SPF)](#prepare-jpf-symbc-ie-spf)
    - [Get the latest SPF version](#get-the-latest-spf-version)
    - [Build jpf-symbc](#build-jpf-symbc)
  - [Run Simple Example from the command line](#run-simple-example-from-the-command-line)
  - [Use SPF inside Eclipse](#use-spf-inside-eclipse)
    - [Import both projects to Eclipse](#import-both-projects-to-eclipse)
    - [Run Simple Example](#run-simple-example)
  - [Try Z3 as constraint solver](#try-z3-as-constraint-solver)
    - [→ Change configuration to use z3](#-change-configuration-to-use-z3)
    - [→ Set the right java library path to the lib folder where the z3 native libraries are located](#-set-the-right-java-library-path-to-the-lib-folder-where-the-z3-native-libraries-are-located)
    - [Simple Example with Z3 in the command line](#simple-example-with-z3-in-the-command-line)
  - [Contact](#contact) -->


<br>
### 1. Prepare the <code>site.properties</code> file
---

{% highlight shell %}
cd /Users/yannic/.jpf

yannic@Yannics-MacBook-Pro .jpf % cat site.properties

# SPF
jpf-core = /Users/yannic/repositories/jpf-core
jpf-symbc = /Users/yannic/repositories/jpf-symbc
extensions = ${jpf-core},${jpf-symbc}
{% endhighlight %}

<br>
<br>
### 2. Make sure to use Java v8
---

{% highlight shell %}
yannic@Yannics-MacBook-Pro jpf-core % java -version
openjdk version "1.8.0_312"
OpenJDK Runtime Environment (Temurin)(build 1.8.0_312-b07)
OpenJDK 64-Bit Server VM (Temurin)(build 25.312-b07, mixed mode)
{% endhighlight %}

<br>
<br>
### 3. Prepare the jpf-core (i.e., JPF)
---

**3.1 Get the Java-8 branch for jpf-core**<br>
→ [GitHub - javapathfinder/jpf-core at java-8](https://github.com/javapathfinder/jpf-core/tree/java-8)

{% highlight shell %}
git clone git@github.com:javapathfinder/jpf-core.git
git checkout -b java-8 origin/java-8

git branch
* java-8
  master
{% endhighlight %}

<br>
**3.2 Build jpf-core**<br>
{% highlight shell %}
ant build
{% endhighlight %}

<details>
<summary>Build Log</summary>    
{% highlight shell %}
    yannic@Yannics-MacBook-Pro jpf-core % ant build
    Buildfile: /Users/yannic/repositories/jpf-core/build.xml
    
    -cond-clean:
    
    clean:
    
    -init:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build
    
    -compile-annotations:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build/annotations
        [javac] Compiling 10 source files to /Users/yannic/repositories/jpf-core/build/annotations
    
    -compile-main:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build/main
        [javac] Compiling 708 source files to /Users/yannic/repositories/jpf-core/build/main
        [javac] /Users/yannic/repositories/jpf-core/src/main/gov/nasa/jpf/vm/MJIEnv.java:20: warning: InstructionConstants is internal proprietary API and may be removed in a future release
        [javac] import com.sun.org.apache.bcel.internal.generic.InstructionConstants;
        [javac]                                                ^
        [javac] /Users/yannic/repositories/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:21: warning: SharedSecrets is internal proprietary API and may be removed in a future release
        [javac] import sun.misc.SharedSecrets;
        [javac]                ^
        [javac] /Users/yannic/repositories/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:22: warning: JavaLangAccess is internal proprietary API and may be removed in a future release
        [javac] import sun.misc.JavaLangAccess;
        [javac]                ^
        [javac] /Users/yannic/repositories/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:85: warning: JavaLangAccess is internal proprietary API and may be removed in a future release
        [javac]    static final JavaLangAccess JLA = SharedSecrets.getJavaLangAccess();
        [javac]                 ^
        [javac] /Users/yannic/repositories/jpf-core/src/main/gov/nasa/jpf/vm/HashedAllocationContext.java:85: warning: SharedSecrets is internal proprietary API and may be removed in a future release
        [javac]    static final JavaLangAccess JLA = SharedSecrets.getJavaLangAccess();
        [javac]                                      ^
        [javac] /Users/yannic/repositories/jpf-core/src/main/gov/nasa/jpf/vm/choice/PermutationCG.java:35: warning: [deprecation] ChoiceGeneratorBase() in ChoiceGeneratorBase has been deprecated
        [javac]   public PermutationCG (PermutationGenerator pg){
        [javac]                                                 ^
        [javac] Note: Some input files use unchecked or unsafe operations.
        [javac] Note: Recompile with -Xlint:unchecked for details.
        [javac] 6 warnings
    
    -compile-peers:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build/peers
        [javac] Compiling 79 source files to /Users/yannic/repositories/jpf-core/build/peers
        [javac] Note: /Users/yannic/repositories/jpf-core/src/peers/gov/nasa/jpf/vm/JPF_java_util_Random.java uses internal proprietary API that may be removed in a future release.
        [javac] Note: Recompile with -Xlint:sunapi for details.
    
    -compile-classes:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build/classes
        [javac] Compiling 84 source files to /Users/yannic/repositories/jpf-core/build/classes
        [javac] Note: Some input files use internal proprietary API that may be removed in a future release.
        [javac] Note: Recompile with -Xlint:sunapi for details.
        [javac] Creating empty /Users/yannic/repositories/jpf-core/build/classes/java/nio/package-info.class
    
    -compile-tests:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build/tests
        [javac] Compiling 191 source files to /Users/yannic/repositories/jpf-core/build/tests
        [javac] /Users/yannic/repositories/jpf-core/src/tests/TypeNameTest.java:31: warning: [overrides] Class B overrides equals, but neither it nor any superclass overrides hashCode method
        [javac] class B {
        [javac] ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/CGCreatorFactoryTest.java:44: warning: [overrides] Class CGCreatorFactoryTest.B overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class B {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/JSONTest.java:344: warning: [overrides] Class JSONTest.Bool overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class Bool {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/JSONTest.java:388: warning: [overrides] Class JSONTest.ByteShortIntLong overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class ByteShortIntLong {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/JSONTest.java:447: warning: [overrides] Class JSONTest.O overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class O {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/JSONTest.java:479: warning: [overrides] Class JSONTest.ArrI overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class ArrI {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/JSONTest.java:520: warning: [overrides] Class JSONTest.BoxedInteger overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class BoxedInteger {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/mc/data/JSONTest.java:549: warning: [overrides] Class JSONTest.BoxedDouble overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   class BoxedDouble {
        [javac]   ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:34: warning: [deprecation] getCallerClass(int) in Reflection has been deprecated
        [javac]       Class<?> callerCls = sun.reflect.Reflection.getCallerClass(0); // that would be getCallerClass()
        [javac]                                                  ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:38: warning: [deprecation] getCallerClass(int) in Reflection has been deprecated
        [javac]       callerCls = sun.reflect.Reflection.getCallerClass(1); // foo()
        [javac]                                         ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:42: warning: [deprecation] getCallerClass(int) in Reflection has been deprecated
        [javac]       callerCls = sun.reflect.Reflection.getCallerClass(2); // bar()
        [javac]                                         ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java:46: warning: [deprecation] getCallerClass(int) in Reflection has been deprecated
        [javac]       callerCls = sun.reflect.Reflection.getCallerClass(3); // callIt()
        [javac]                                         ^
        [javac] /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/util/SortedArrayObjectSetTest.java:30: warning: [overrides] Class X overrides equals, but neither it nor any superclass overrides hashCode method
        [javac]   static class X implements Comparable<X> {
        [javac]          ^
        [javac] Note: Some input files use unchecked or unsafe operations.
        [javac] Note: Recompile with -Xlint:unchecked for details.
        [javac] Note: /Users/yannic/repositories/jpf-core/src/tests/gov/nasa/jpf/test/vm/reflection/ReflectionTest.java uses internal proprietary API that may be removed in a future release.
        [javac] Note: Recompile with -Xlint:sunapi for details.
        [javac] 13 warnings
    
    -compile-examples:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-core/build/examples
        [javac] Compiling 11 source files to /Users/yannic/repositories/jpf-core/build/examples
    
    compile:
         [copy] Copying 1 file to /Users/yannic/repositories/jpf-core/build/main/gov/nasa/jpf
    
    -version:
    
    build:
         [copy] Warning: Could not find file /Users/yannic/repositories/jpf-core/.version to copy.
          [jar] Building jar: /Users/yannic/repositories/jpf-core/build/jpf-classes.jar
          [jar] Building jar: /Users/yannic/repositories/jpf-core/build/jpf.jar
          [jar] Building jar: /Users/yannic/repositories/jpf-core/build/jpf-annotations.jar
          [jar] Building jar: /Users/yannic/repositories/jpf-core/build/classloader_specific_tests.jar
          [jar] Building jar: /Users/yannic/repositories/jpf-core/build/RunJPF.jar
          [jar] Building jar: /Users/yannic/repositories/jpf-core/build/RunTest.jar
    
    BUILD SUCCESSFUL
    Total time: 8 seconds
{% endhighlight %}
</details>

<details>
<summary>Potential Errors</summary>    

<ul>
<li><b>gov.nasa.jpf.vm.MJIEnv</b></li>
	<ul>
	<li>→ comment/remove the:</li>
		{% highlight java %}
		import com.sun.org.apache.bcel.internal.generic.InstructionConstants;
		{% endhighlight %}
</ul>
</ul>

</details>

<br>
<br>
### 4. Prepare jpf-symbc (i.e., SPF)
---


**4.1 Get the latest SPF version**<br>
→ [GitHub - SymbolicPathFinder/jpf-symbc: Symbolic PathFinder](https://github.com/SymbolicPathFinder/jpf-symbc)

{% highlight shell %}
git clone https://github.com/SymbolicPathFinder/jpf-symbc.git
{% endhighlight %}

<br>
**4.2 Build jpf-symbc**<br>
{% highlight shell %}
ant build
{% endhighlight %}

<details>
<summary>Build Log</summary>   
{% highlight shell %}
    yannic@Yannics-MacBook-Pro jpf-symbc % ant build
    Buildfile: /Users/yannic/repositories/jpf-symbc/build.xml
    
    -init:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build
    
    -compile-annotations:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build/annotations
        [javac] Compiling 4 source files to /Users/yannic/repositories/jpf-symbc/build/annotations
    
    -compile-main:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build/main
        [javac] Compiling 335 source files to /Users/yannic/repositories/jpf-symbc/build/main
        [javac] Note: Some input files use unchecked or unsafe operations.
        [javac] Note: Recompile with -Xlint:unchecked for details.
    
    -compile-peers:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build/peers
        [javac] Compiling 7 source files to /Users/yannic/repositories/jpf-symbc/build/peers
    
    -compile-classes:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build/classes
        [javac] Compiling 9 source files to /Users/yannic/repositories/jpf-symbc/build/classes
    
    -compile-tests:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build/tests
        [javac] Compiling 197 source files to /Users/yannic/repositories/jpf-symbc/build/tests
    
    -compile-examples:
        [mkdir] Created dir: /Users/yannic/repositories/jpf-symbc/build/examples
        [javac] Compiling 213 source files to /Users/yannic/repositories/jpf-symbc/build/examples
        [javac] Note: Some input files use unchecked or unsafe operations.
        [javac] Note: Recompile with -Xlint:unchecked for details.
    
    compile:
    
    -jar-jvm:
          [jar] Building jar: /Users/yannic/repositories/jpf-symbc/build/jpf-symbc.jar
    
    -jar-jpf:
          [jar] Building jar: /Users/yannic/repositories/jpf-symbc/build/jpf-symbc-classes.jar
    
    -jar-annotations:
          [jar] Building jar: /Users/yannic/repositories/jpf-symbc/build/jpf-symbc-annotations.jar
    
    build:
    
    BUILD SUCCESSFUL
    Total time: 7 seconds
{% endhighlight %}
</details>
    

<br>
<br>
### 5. Run Simple Example from the command line
---

*Inside the jpf-symbc folder, run the following command:*

{% highlight shell %}
java -Xmx1024m -ea -jar ../jpf-core/build/RunJPF.jar src/examples/demo/NumericExample.jpf
{% endhighlight %}

<details>
<summary>Console Output</summary>   
{% highlight shell %}
    yannic@Yannics-MacBook-Pro jpf-symbc % java -Xmx1024m -ea -jar ../jpf-core/build/RunJPF.jar src/examples/demo/NumericExample.jpf
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
    
    ====================================================== search started: 23/6/22 11:03 AM
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
    
    ====================================================== search finished: 23/6/22 11:03 AM
{% endhighlight %}
</details>

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

<br>
### 8. Contact
---
If you have any issues with these instructions, please send an email to [Yannic Noller](mailto:yannic.noller@acm.org).
